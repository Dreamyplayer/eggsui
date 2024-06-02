import React from 'react';

const TodaysCollection: React.FC = () => {
  return (
    <div className='mt-8 rounded bg-white p-6 shadow'>
      <h3 className='mb-4 text-lg font-semibold'>
        {`Today's Collection - `}
        <span className='text-green-500'>262 Eggs</span>
      </h3>
      
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-1/2 rounded-full bg-blue-500'></div>
            <span className='text-blue-500'>In Nest</span>
            <span className='ml-auto text-blue-500'>48</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-2/3 rounded-full bg-green-500'></div>
            <span className='text-green-500'>In Nursery</span>
            <span className='ml-auto text-green-500'>99</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-4/5 rounded-full bg-teal-500'></div>
            <span className='text-teal-500'>Good Condition</span>
            <span className='ml-auto text-teal-500'>82</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-1/3 rounded-full bg-red-500'></div>
            <span className='text-red-500'>Discarded</span>
            <span className='ml-auto text-red-500'>33</span>
          </div>
        </div>
        <div className='hidden flex-col justify-center gap-4 md:flex'>
          <div className='flex items-center gap-2'>
            <span className='text-blue-500'>In Nest</span>
            <span className='ml-auto text-blue-500'>48</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-green-500'>In Nursery</span>
            <span className='ml-auto text-green-500'>99</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-teal-500'>Good Condition</span>
            <span className='ml-auto text-teal-500'>82</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-red-500'>Discarded</span>
            <span className='ml-auto text-red-500'>33</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysCollection;
