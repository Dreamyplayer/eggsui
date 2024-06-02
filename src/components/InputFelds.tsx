import { Search } from 'lucide-react';

const eggItems = ['Broken', 'Intact', 'Rotten'];

const InputFeilds = ({ holderName, len }: { holderName: string; len: number }) => {
  return (
    <div className='flex space-x-4 p-4'>
      <div className='relative flex flex-row items-center justify-center gap-4'>
        <div className='absolute left-3'>{<Search width={16} height={16} />}</div>
        <input type='text' className='w-80 rounded border p-2 pl-8' placeholder='Search' />
      </div>

      <div className='flex items-center justify-end gap-2'>
        <input type='date' className='rounded border p-2' placeholder='From Date' />
        <span className='text-gray-500'>to</span>
        <input type='date' className='rounded border p-2' placeholder='Till Date' />
      </div>

      {Array.from({ length: len }).map((_, index) => (
        <input key={index} className='border p-2' placeholder={holderName} list='Items' name='Items' />
      ))}
      {/* <input className='border p-2' placeholder='Receiving Site' list='Items' name='Items' /> */}
      <datalist id='Items'>
        {eggItems.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default InputFeilds;
