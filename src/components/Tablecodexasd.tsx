import React from 'react';

// Assuming Spices and Fertile are defined components
const Spices: React.FC<{ title: string }> = ({ title }) => <div>{title}</div>;
const Fertile: React.FC<{ status: string }> = ({ status }) => <div>{status}</div>;

interface TableProps {
  headings: string[];
  data: (string | number)[][];
  type: 'spices' | 'eggslist';
}

export const Tablecode: React.FC<TableProps> = ({ headings, data, type }) => {
  const renderCellContent = (cell: string, cellIndex: number, rowIndex: number) => {
    if (type === 'spices') {
      if (cellIndex === 1) return <Spices title={cell} />;
      return cell;
    } else if (type === 'eggslist') {
      if (cellIndex === 1) return <Spices title={cell} />;
      if (cellIndex === 2) return (
        <>
          {cell.split(' ').slice(0, -1).join(' ')}
          <Fertile status={cell} />
        </>
      );
      return cell;
    }
    return cell;
  };

  const renderRow = (row: string[], rowIndex: number) => (
    <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className={`border-b border-gray-300 px-4 py-3.5 font-medium ${
            type === 'spices' && [4, 5, 6].includes(cellIndex)
              ? ['text-blue-600', 'text-orange-500', 'text-green-500'][Math.floor(Math.random() * 3)]
              : ''
          }`}
        >
          {renderCellContent(cell, cellIndex, rowIndex)}
        </td>
      ))}
    </tr>
  );

  return (
    <div className='flex space-x-4 p-4'>
      <table className='w-full'>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className='bg-neutral-300 p-3 text-sm font-medium'>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((row, rowIndex) => renderRow(row, rowIndex))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablecode;
