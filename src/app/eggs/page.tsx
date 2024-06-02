import { BreadCrumb } from '@/components/Compos';
import DataTable from '@/components/DataTable';
import SideBar from '@/components/SideBar';
import { EgglistData, EggsListHead } from '@/utils/constants';
import { createRepeatedArray } from '@/utils/functions';

export default function Page() {
  const repeatSpices = createRepeatedArray(EgglistData, 10);
  return (
    <div className='flex h-full w-full bg-gray-100'>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='h-full w-full'>
        <BreadCrumb path='Eggs List' />
        {/* Tables */}
        <DataTable title='Eggs List' type='eggslist' data={repeatSpices} headings={EggsListHead} />
      </div>
    </div>
  );
}
