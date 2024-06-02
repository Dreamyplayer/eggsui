import { BreadCrumb } from '@/components/Compos';
import DataTable from '@/components/DataTable';
import SideBar from '@/components/SideBar';
import { EggsIncuabationData, EggsIncuabationHead } from '@/utils/constants';
import { createRepeatedArray } from '@/utils/functions';

export default function Page() {
  const repeatIncubation = createRepeatedArray(EggsIncuabationData, 10);
  return (
    <div className='flex h-full w-full bg-gray-100'>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='h-full w-full'>
        <BreadCrumb path='Eggs List' />
        {/* Tables */}
        <DataTable title='Eggs List' type='incubation' data={repeatIncubation} headings={EggsIncuabationHead} />
      </div>
    </div>
  );
}
