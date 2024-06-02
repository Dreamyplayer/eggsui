import React from 'react';

interface EggData {
  total: number;
  inNest: number;
  inNursery: number;
  goodCondition: number;
  discarded: number;
}

const EggCollection: React.FC = () => {
  const data: EggData = {
    total: 262,
    inNest: 48,
    inNursery: 99,
    goodCondition: 82,
    discarded: 33,
  };

  return (
    <div className='rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-xl font-bold'>Todays Collection - {data.total} Eggs</h2>

      <div className='mb-2 flex items-center'>
        <div className='w-1/2'>
          <div className='h-4 rounded-e-full bg-blue-500' style={{ width: `${data.inNest}%` }}></div>
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <div className='w-1/2'>
          <div className='h-4 rounded-e-full bg-green-400' style={{ width: `${data.inNursery}%` }}></div>
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <div className='w-1/2'>
          <div className='h-4 bg-blue-300 rounded-e-full' style={{ width: `${data.goodCondition}%` }}></div>
        </div>
      </div>
      <div className='mb-2 flex items-center'>
        <div className='w-1/2'>
          <div className='h-4 bg-red-400 rounded-e-full' style={{ width: `${data.discarded}%` }}></div>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <div>
          <div className='h-2 w-2 bg-blue-400 rounded-full'></div>
          <span className='block'>In Nest</span>
          <span className='text-lg text-blue-400 font-semibold'>{data.inNest}</span>
        </div>
        <div>
          <span className='block'>In Nursery</span>
          <span className='text-lg font-semibold text-green-400'>{data.inNursery}</span>
        </div>
        <div>
          <span className='block text-blue-300'>Good Condition</span>
          <span className='text-lg font-semibold'>{data.goodCondition}</span>
        </div>
        <div>
          <span className='block text-red-400'>Discarded</span>
          <span className='text-lg font-semibold'>{data.discarded}</span>
        </div>
      </div>
    </div>
  );
};

export default EggCollection;
