import Avatar from '@/components/Avatar';
import { BreadCrumb, CurrentStats, StatsCards } from '@/components/Compos';
import DataTable from '@/components/DataTable';
import SideBar from '@/components/SideBar';
import TodaysCollection from '@/components/TodaysCollection';
import { spicesData, spicesHead, tranferData, tranferHead } from '@/utils/constants';
import { createRepeatedArray } from '@/utils/functions';

export default function Home() {
  const repeatTanfer = createRepeatedArray(tranferData, 10);
  const repeatSpices = createRepeatedArray(spicesData, 10);
  return (
    <main className='flex h-full w-full bg-gray-100'>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='h-full w-full'>
        {/* Avatar */}
        <Avatar />

        {/* Header */}
        <BreadCrumb path='Dashboard'/>

        {/* Current Stats */}
        <CurrentStats />

        {/* Stats Cards */}
        <StatsCards />

        {/* Today's Collection */}
        <TodaysCollection />

        {/* Tables */}
        <DataTable title='Transfer Details' type='tranfer' data={repeatTanfer} headings={tranferHead} />
        <DataTable title='Spices' type='spices' data={repeatSpices} headings={spicesHead} />
      </div>
    </main>
  );
}
