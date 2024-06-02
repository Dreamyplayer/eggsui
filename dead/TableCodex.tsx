import { FC } from 'react';

import Image from 'next/image';

import { Calendar } from 'lucide-react';

const TransferDetails: FC = () => {
  return (
    <div className='flex space-x-4 p-5'>
      <div className='inline-flex flex-col items-start justify-start gap-6 rounded-lg bg-white p-5 shadow'>
        <div className='inline-flex items-center justify-start gap-6 self-stretch'>
          <div className='shrink grow basis-0 text-2xl font-medium text-neutral-600'>Transfer Details</div>
        </div>
        <div className='inline-flex items-center justify-start gap-6'>
          <div className='flex h-10 items-start justify-start gap-1 rounded border border-stone-300 px-3 py-2.5'>
            <div className='flex h-5 w-5 items-center justify-center p-0.5'></div>
            <div className='h-5 w-40 text-sm font-normal text-stone-300'>Search</div>
          </div>
          <div className='flex items-center justify-start gap-3'>
            <DateInput label='From Date' />
            <div className='text-sm font-normal text-neutral-400'>to</div>
            <DateInput label='Till Date' />
          </div>
          <SelectInput label='From Site' />
          <SelectInput label='Receiving Site' />
        </div>
        <div className='flex flex-col items-start justify-start px-6'>
          <HeaderRow />
          <DataRow
            no={1}
            eggNumber='0273 / 24'
            status='Fertile'
            transferStatus='Completed'
            species='Rainbow Lorikeet'
            speciesLatin='Trichoglossus Moluccanus'
            fromSite='Site Name XYZ'
            toDate='10 Apr 2024'
            receivingAt='Site Name XYZ'
            nursery='NUR1234'
          />
          <DataRow
            no={2}
            eggNumber='0273 / 24'
            status='Fertile'
            transferStatus='In Progress'
            species='Rainbow Lorikeet'
            speciesLatin='Trichoglossus Moluccanus'
            fromSite='Site Name XYZ'
            toDate='10 Apr 2024'
            receivingAt='Site Name XYZ'
            nursery='NUR1234'
          />
          <DataRow
            no={3}
            eggNumber='0273 / 24'
            status='Fertile'
            transferStatus='Cancelled'
            species='Rainbow Lorikeet'
            speciesLatin='Trichoglossus Moluccanus'
            fromSite='Site Name XYZ'
            toDate='10 Apr 2024'
            receivingAt='Site Name XYZ'
            nursery='NUR1234'
          />
          {/* Add more DataRow components as needed */}
        </div>
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

const DateInput: FC<{ label: string }> = ({ label }) => (
  <div className='inline-flex w-40 flex-col items-start justify-start gap-1 rounded'>
    <div className='flex h-10 flex-col items-start justify-start self-stretch rounded border border-stone-300 px-3'>
      <div className='inline-flex h-10 items-center justify-start gap-2 self-stretch py-2.5 pl-1'>
        <div className='shrink grow basis-0 text-sm font-normal text-neutral-400'>{label}</div>
        <div className='flex h-4 w-4 items-center justify-center'>
          <div className='relative h-4 w-4'>
            <div className='absolute left-0'>{<Calendar height={16} width={16} />}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SelectInput: FC<{ label: string }> = ({ label }) => (
  <div className='inline-flex w-40 flex-col items-start justify-start gap-1 rounded'>
    <div className='flex h-10 flex-col items-start justify-start self-stretch rounded border border-stone-300 px-3'>
      <div className='inline-flex h-10 items-center justify-start gap-2 self-stretch py-2.5 pl-1'>
        <div className='shrink grow basis-0 text-sm font-normal text-neutral-400'>{label}</div>
        <div className='flex h-4 w-4 items-center justify-center px-1 py-1.5'></div>
      </div>
    </div>
  </div>
);

const HeaderRow: FC = () => (
  <div className='inline-flex items-center justify-start gap-5 space-x-4 rounded bg-neutral-300 px-5 py-5'>
    <div className='flex items-center justify-start gap-2'>
      <div className='w-5 text-xs font-semibold text-neutral-600'>NO</div>
      <div className='h-4 w-20 text-xs font-semibold text-neutral-600'>EGG NUMBER</div>
    </div>
    <div className='w-24 text-xs font-semibold text-neutral-600'>STATUS</div>
    <div className='w-44 text-xs font-semibold text-neutral-600'>SPECIES</div>
    <div className='h-4 w-28 text-xs font-semibold text-neutral-600'>TRANSFERED FROM</div>
    <div className='h-4 w-24 text-xs font-semibold text-neutral-600'>DATE</div>
    <div className='h-4 w-28 text-xs font-semibold text-neutral-600'>RECEIVING AT</div>
    <div className='h-4 w-24 text-xs font-semibold text-neutral-600'>DATE</div>
    <div className='h-4 w-20 text-xs font-semibold text-neutral-600'>NURSERY</div>
  </div>
);

interface DataRowProps {
  no: number;
  eggNumber: string;
  status: string;
  transferStatus: string;
  species: string;
  speciesLatin: string;
  fromSite: string;
  toDate: string;
  receivingAt: string;
  nursery: string;
}

const DataRow: FC<DataRowProps> = ({
  no,
  eggNumber,
  status,
  transferStatus,
  species,
  speciesLatin,
  fromSite,
  toDate,
  receivingAt,
  nursery,
}) => (
  <div className='inline-flex items-center justify-start gap-5 border-b border-stone-300 bg-white px-4 py-3.5'>
    <div className='flex items-center justify-start gap-2 p-5'>
      <div className='w-5 text-xs font-normal text-neutral-600'>{no}</div>
      <div className='inline-flex flex-col items-start justify-center gap-1'>
        <div className='h-5 w-20 text-base font-medium text-neutral-600'>{eggNumber}</div>
        <div className='inline-flex items-center justify-start gap-2.5 rounded bg-gray-100 p-1'>
          <div className='h-4 w-14 text-center text-sm font-medium tracking-tight text-emerald-800'>{status}</div>
        </div>
      </div>
    </div>
    <div className={`flex h-6 items-center justify-start gap-2.5 rounded p-1 ${getStatusStyle(transferStatus)}`}>
      <div
        className={`shrink grow basis-0 text-center text-sm font-medium tracking-tight ${getTextColor(transferStatus)}`}
      >
        {transferStatus}
      </div>
    </div>
    <div className='flex h-10 items-center justify-start gap-2'>
      <Image className='h-10 w-10 rounded-full' src='/Ellipse 79.png' alt='species' width={40} height={40} />
      <div className='inline-flex flex-col items-start justify-center gap-0.5'>
        <div className='text-sm font-semibold text-cyan-900'>{species}</div>
        <div className='text-sm font-normal text-cyan-900'>{speciesLatin}</div>
      </div>
    </div>
    <div className='w-28 text-base font-normal text-neutral-600'>{fromSite}</div>
    <div className='w-24 text-base font-normal text-neutral-600'>{toDate}</div>
    <div className='w-28 text-base font-normal text-neutral-600'>{receivingAt}</div>
    <div className='w-24 text-base font-normal text-neutral-600'>{toDate}</div>
    <div className='w-20 text-base font-normal text-neutral-600'>{nursery}</div>
  </div>
);

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-emerald-100';
    case 'In Progress':
      return 'bg-amber-100';
    case 'Cancelled':
      return 'bg-red-100';
    default:
      return '';
  }
};

const getTextColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'text-emerald-800';
    case 'In Progress':
      return 'text-amber-800';
    case 'Cancelled':
      return 'text-red-800';
    default:
      return '';
  }
};

export default TransferDetails;
