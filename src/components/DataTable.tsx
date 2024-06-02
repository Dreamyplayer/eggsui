import InputFeilds from '@/components/InputFelds';
import Table from '@/components/Table';

const DataTable = ({
  title,
  headings,
  data,
  type,
}: {
  title: string;
  headings: string[];
  data: (string | number)[][];
  type: string;
  }) => {
    // 'spices'
  // 'tranfer
  // eggslist
  console.log(type)
  return (
    <div className='flex space-x-4 p-4'>
      <div className='rounded bg-white p-5 shadow'>
        <h1 className='mt-2 p-4 text-xl font-semibold'>{title}</h1>
        {type === 'nursery' ? <InputFeilds holderName='Site' len={1} /> : <InputFeilds holderName='Receiving Site' len={2} /> }

        <Table type={type} headings={headings} data={data} />

        {/* Pages */}
        <div className='flex items-center justify-between p-4'>
          <span className='p-2 text-gray-400'>Showing 1 to 10 out of 60 entries</span>
          <div className='flex items-center space-x-2 p-2 text-gray-400'>
            <span className='p-2 text-gray-400'>Previous</span>
            {[1, 2, 3, 4].map((k, i) => (
              <span key={i} className={`rounded-md p-2 px-3 ${k === 1 ? 'bg-gray-400 text-white' : 'text-gray-400'}`}>
                {k}
              </span>
            ))}
            <span className='p-2 text-gray-400'>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
