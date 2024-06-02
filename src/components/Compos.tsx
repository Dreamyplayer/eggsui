import Image from 'next/image';

import { Cards } from '@/utils/constants';
import { Search } from 'lucide-react';

export const CurrentStats = () => {
  return (
    <div className='flex items-center p-4'>
      <div className='flex-grow'>
        <div className='rounded-md p-4 text-xl font-semibold'>Current Stats</div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex items-center justify-end gap-2'>
          <input type='date' className='rounded border p-2' placeholder='From Date' />
          <span className='text-gray-500'>to</span>
          <input type='date' className='rounded border p-2' placeholder='Till Date' />
        </div>
        <div className='relative flex flex-row items-center justify-center gap-4'>
          <div className='absolute left-3'>{<Search width={16} height={16} />}</div>
          <input type='text' className='w-96 rounded border p-2 pl-8' placeholder='Search' />
        </div>
      </div>
    </div>
  );
};

export const StatsCards = () => {
  return (
    <div className='grid grid-cols-5 gap-4 p-4'>
      {Cards.map((item, i) => (
        <div key={i} className='flex flex-row items-center gap-2 rounded-lg bg-white p-4 shadow'>
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-md`}
            style={{ backgroundColor: item.color }}
          >
            <Image width={30} height={30} src={'/Egg.png'} alt='' />
          </div>
          <div className='flex flex-col'>
            <span className={`font-bold text-[#00AFD6]`}>{item.number}</span>
            <span className='text-gray-500'>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const BreadCrumb = ({ path }: { path: string }) => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-2'>
        <span className='text-gray-400'>
          Egg Module <span className='text-gray-700'>/ {path}</span>
        </span>
      </div>
    </div>
  );
};
