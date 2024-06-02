const TodaysCollection = () => {
  return (
    <div className='p-4'>
      <div className='mt-4 inline-flex flex-col items-start justify-start gap-6 rounded-lg bg-white p-6 shadow'>
        <div className='inline-flex items-center justify-start gap-4 self-stretch'>
          <div className='shrink grow basis-0'>
            <span className='text-2xl font-medium text-neutral-600'>Todays Collection - </span>
            <span className='text-2xl font-semibold text-emerald-600'>262 Eggs</span>
          </div>
        </div>
        <div className='inline-flex items-start justify-start gap-16'>
          <div className='inline-flex flex-col items-start justify-start gap-3'>
            <div className='flex flex-col items-start justify-start gap-6'>
              <BarCollection />
            </div>
            <div className='inline-flex h-4 items-center justify-start gap-8'>
              {[0, 5, 10, 25, 50, 75, 100].map((k, i) => (
                <div key={i} className='text-xs font-normal text-neutral-400'>
                  {k}
                </div>
              ))}
            </div>
          </div>
          <div className='flex h-40 flex-col items-start justify-start gap-6'>
            <EggStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysCollection;

const barData = [
  { width: 'w-40', bgColor: 'bg-cyan-500/70' },
  { width: 'w-72', bgColor: 'bg-green-500/70' },
  { width: 'w-60', bgColor: 'bg-cyan-500' },
  { width: 'w-36', bgColor: 'bg-red-500/60' },
];

const BarCollection = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6'>
      {barData.map((bar, index) => (
        <div key={index} className={`h-4 ${bar.width} rounded-br-3xl rounded-tr-3xl ${bar.bgColor} p-2.5`}></div>
      ))}
    </div>
  );
};

const eggStatusData = [
  {
    bgColor: 'bg-sky-400',
    textColor: 'text-cyan-500',
    label: 'In Nest',
    count: 48,
  },
  {
    bgColor: 'bg-cyan-500',
    textColor: 'text-cyan-500',
    label: 'Good Condition',
    count: 82,
  },
  {
    bgColor: 'bg-emerald-300',
    textColor: 'text-green-500',
    label: 'In Nursery',
    count: 99,
  },
  {
    bgColor: 'bg-red-300',
    textColor: 'text-red-500',
    label: 'Discarded',
    count: 33,
  },
];

const EggStatus = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6'>
      {eggStatusData.slice(0, 2).map((status, index) => (
        <div key={index} className='flex w-full justify-between gap-6'>
          <div className='inline-flex flex-col items-start justify-center gap-1 rounded-lg px-1 py-3'>
            <div className='inline-flex w-28 items-center justify-start gap-1'>
              <div className={`h-2 w-2 rounded-3xl ${status.bgColor}`}></div>
              <div className='shrink grow basis-0 text-sm font-medium tracking-tight text-zinc-500'>{status.label}</div>
            </div>
            <div className={`text-xl font-medium ${status.textColor}`}>{status.count}</div>
          </div>
          <div className='inline-flex flex-col items-start justify-center gap-1 rounded-lg px-1 py-3'>
            <div className='inline-flex w-28 items-center justify-start gap-1'>
              <div className={`h-2 w-2 rounded-3xl ${eggStatusData[index + 2].bgColor}`}></div>
              <div className='shrink grow basis-0 text-sm font-medium tracking-tight text-zinc-500'>
                {eggStatusData[index + 2].label}
              </div>
            </div>
            <div className={`text-xl font-medium ${eggStatusData[index + 2].textColor}`}>
              {eggStatusData[index + 2].count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
