import Avatar from '@/components/Avatar';
import { BreadCrumb } from '@/components/Compos';
import DataTable from '@/components/DataTable';
import SideBar from '@/components/SideBar';
import { NurseryData, NurseryHead } from '@/utils/constants';
import { createRepeatedArray } from '@/utils/functions';

export default function Page() {
  const repeatNursery = createRepeatedArray(NurseryData, 10);
  return (
    <div className='flex h-full w-full bg-gray-100'>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='h-full w-full'>
        <Avatar />
        <BreadCrumb path='Nursery List' />
        {/* Tables */}
        <DataTable title='Nursery' type='nursery' data={repeatNursery} headings={NurseryHead} />
      </div>
    </div>
  );
}
