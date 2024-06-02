'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavBarItems } from '@/utils/constants';

const SideBar = () => {
  const path = usePathname();

  return (
    <div className='w-64 bg-[#1F515B] text-white'>
      {/* LOGO */}
      <div className='mt-4 flex flex-row items-center justify-between gap-2 px-4'>
        <Image src='/Logo.png' height={40} width={40} alt='Logo' />
        <h1 className='font-medium'>Materialize</h1>
        <Image src='/menu-arrow.png' height={24} width={24} alt='arrow' className='ml-3' />
      </div>

      {Object.keys(NavBarItems).map((k, i) => (
        <div key={i} className='flex flex-col items-start gap-3 pt-10'>
          <div className='relative flex w-full items-center justify-start gap-3'>
            <span className='h-[1px] w-4 bg-white'>{''}</span>
            <span className=''>{k}</span>
          </div>
          <div className='relative flex w-full flex-col items-start gap-3 px-3'>
            {NavBarItems[k as keyof typeof NavBarItems].map((item, index) => (
              <Link
                key={index}
                href={item === 'Dashboard' ? '/' : item.endsWith('Rooms') ? 'rooms' : item.toLowerCase()}
                className='w-full'
              >
                <button
                  className={`flex w-full cursor-pointer flex-row items-center justify-start gap-4 rounded-md p-2 hover:bg-[#2a6f7f] ${path.replace('/', '').includes(item.toLowerCase()) || (item === 'Dashboard' && path === '/') ? 'bg-[#2A6F7F]' : ''}`}
                >
                  <Image src='/Group.png' height={24} width={24} alt='Dashboard Icon' />
                  <span>{item}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
