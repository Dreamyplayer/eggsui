import Image from "next/image";

const Avatar = () => {
  return (
    <div className='flex h-16 items-center justify-end gap-1 mt-4'>
    <Image
      src={'/notifications_unread.png'}
      width={40}
      height={40}
      className='cursor-pointer rounded-full'
      alt='avatar'
    />
    <Image
      src={'/notifications_read.png'}
      width={40}
      height={40}
      className='cursor-pointer rounded-full'
      alt='avatar'
    />
    <Image src={'/Avatar.png'} width={40} height={40} className='mr-6 cursor-pointer rounded-full' alt='avatar' />
  </div>
  )
};

export default Avatar;
