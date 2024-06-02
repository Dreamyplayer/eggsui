'use client';

import Image from 'next/image';

import useTabs from '@/hooks/useTabs';
import { tabItems } from '@/utils/constants';
import { getClassNames } from '@/utils/functions';
import { StatusPart, TransferStatus } from '@/utils/types';

type TableProps = {
  headings: string[];
  data: any[][];
  type: string;
};

const Table: React.FC<TableProps> = ({ headings, data, type }) => {
  const { tabType, handleType } = useTabs();

  return (
    <div className='flex space-x-4 p-4'>
      <div className='inline-flex flex-col text-nowrap'>
        {type === 'eggslist' ? (
          <div className='inline-flex h-12 w-96 items-center justify-start'>
            {tabItems.map(tab => (
              <div
                key={tab.type}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 ${
                  tabType === tab.type ? 'border-b-4 border-green-500' : 'border-b-2 border-neutral-400'
                }`}
              >
                <button
                  onClick={() => handleType(tab.type)}
                  className={`text-sm font-semibold ${tabType === tab.type ? 'text-green-500' : 'text-zinc-500'}`}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}

        <table className='mt-4 w-full'>
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
            {type === 'spices'
              ? data.slice(0, 10).map((row, rowIndex) => (
                  <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
                    {row.map((cell: string, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`border-b border-gray-300 ${cellIndex === 4 ? 'text-[#00AFD6]' : cellIndex === 5 ? 'text-[#37BD69]' : cellIndex === 6 ? 'text-[#FA6140]' : ''} px-4 py-3.5 font-medium`}
                      >
                        {[1].includes(cellIndex) ? '' : cell}
                        {cellIndex === 1 ? <Spices title={cell} /> : ''}
                        {[4, 5, 6].includes(cellIndex) ? '' : ''}
                      </td>
                    ))}
                  </tr>
                ))
              : tabType === 'Incubation'
                ? data.slice(0, 10).map((row, rowIndex) => (
                    <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
                      {row.map((cell: string, cellIndex) => (
                        <td key={cellIndex} className='border-b border-gray-300 px-4 py-3.5'>
                          {[1, 2, 6].includes(cellIndex) ? '' : cell}
                          {cellIndex === 1 ? (
                            <Spices title={cell} />
                          ) : cellIndex === 2 ? (
                            <Fertile status={cell} />
                          ) : cellIndex === 6 ? (
                            <Spices title={cell} />
                          ) : (
                            ''
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                : type === 'eggslist'
                  ? data.slice(0, 10).map((row, rowIndex) => (
                      <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
                        {row.map((cell: string, cellIndex) => (
                          <td key={cellIndex} className='border-b border-gray-300 px-4 py-3.5'>
                            {[1, 2, 6].includes(cellIndex) ? '' : cell}
                            {cellIndex === 1 ? (
                              <Spices title={cell} />
                            ) : cellIndex === 2 ? (
                              <Fertile status={cell} />
                            ) : cellIndex === 6 ? (
                              <Spices title={cell} />
                            ) : (
                              ''
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  : type === 'nursery'
                    ? data.slice(0, 10).map((row, rowIndex) => (
                        <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
                          {row.map((cell: string, cellIndex) => (
                            <td key={cellIndex} className='border-b border-gray-300 px-4 py-3.5'>
                              {[7].includes(cellIndex) ? '' : cell}
                              {cellIndex === 7 ? <Spices title={cell} /> : ''}
                            </td>
                          ))}
                        </tr>
                      ))
                    : data.slice(0, 10).map((row, rowIndex) => (
                        <tr key={rowIndex} className='cursor-pointer hover:shadow-md'>
                          {row.map((cell: string, cellIndex) => (
                            <td key={cellIndex} className='border-b border-gray-300 px-4 py-3.5'>
                              {[1, 2, 3].includes(cellIndex)
                                ? ''
                                : cellIndex === 1
                                  ? cell.split(' ').slice(0, -1).join(' ')
                                  : cell}
                              {cellIndex === 3 ? (
                                <Spices title={cell} />
                              ) : cellIndex === 2 ? (
                                <Status transferStatus={cell} />
                              ) : (
                                ''
                              )}
                              {cellIndex === 1 ? <Fertile status={cell} /> : ''}
                            </td>
                          ))}
                        </tr>
                      ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

const Status = ({ transferStatus }: { transferStatus: string }) => {
  return (
    <div
      className={`flex h-6 items-center justify-start gap-2.5 rounded p-1 ${getClassNames({ transferStatus: transferStatus as TransferStatus })}`}
    >
      <div
        className={`shrink grow basis-0 text-nowrap text-center text-sm font-medium tracking-tight ${getClassNames({ transferStatus: transferStatus as TransferStatus })}`}
      >
        {transferStatus}
      </div>
    </div>
  );
};

const Spices = ({ title }: { title: string }) => {
  const [first, second, third, fourth, ...sad] = title.split(' ');
  const parts = `${first} ${second}`;
  const partstr = `${third} ${fourth}`;

  return (
    <div className='inline-flex h-10 items-center justify-start gap-2'>
      <Image
        className='h-10 w-10 rounded-full'
        src={['Created', 'Designation'].includes(third) ? '/Avatar.png' : '/Ellipse 79.png'}
        alt='species'
        width={40}
        height={40}
      />
      <div className='inline-flex flex-col items-start justify-center gap-0.5'>
        <div className='text-sm font-semibold text-cyan-900'>{parts}</div>
        <div className='text-nowrap text-sm font-normal text-cyan-900'>
          {partstr} {sad[0]}
        </div>
      </div>
    </div>
  );
};

const Fertile = ({ status }: { status: string }) => {
  const parts = status.split(' ');
  const mainPart = parts.slice(0, -1).join('');
  const statusPart = parts.slice(-1).join('');

  return (
    <div className='inline-flex flex-col items-center justify-start gap-2.5 rounded p-1'>
      <div className='h-4 w-14 text-center text-sm font-medium tracking-tight text-emerald-800'>{mainPart}</div>
      <div
        className={`h-5 w-14 rounded ${getClassNames({ statusPart: statusPart as StatusPart })} text-center text-sm font-medium tracking-tight`}
      >
        {statusPart}
      </div>
    </div>
  );
};

const Tabs = () => {
  return (
    <div className='inline-flex h-12 w-96 items-center justify-start'>
      <div className='flex items-center justify-center gap-2.5 rounded border-b-4 border-green-500 px-4 py-3.5'>
        <button className='text-sm font-semibold text-green-500'>Received - 24</button>
      </div>
      <div className='flex items-center justify-center gap-2.5 border-b-2 border-neutral-400 px-4 py-3.5'>
        <button className='text-sm font-semibold text-zinc-500'>Incubation - 100</button>
      </div>
      <div className='flex items-center justify-center gap-2.5 border-b-2 border-neutral-400 px-4 py-3.5'>
        <button className='text-sm font-semibold text-zinc-500'>Hatched - 100</button>
      </div>
      <div className='flex items-center justify-center gap-2.5 border-b-2 border-neutral-400 px-4 py-3.5'>
        <button className='text-sm font-semibold text-zinc-500'>Discarded - 12</button>
      </div>
    </div>
  );
};
