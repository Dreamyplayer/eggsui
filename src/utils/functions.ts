import { CompleteType, StatusPart, TransferStatus } from '@/utils/types';

export const createRepeatedArray = (values: string[][], repetitions: number): (string | number)[][] => {
  let counter = 1;

  return Array.from({ length: repetitions }, () =>
    values.map(innerArray => {
      return [counter++, ...innerArray];
    }),
  ).flat();
};

export const getClassNames = (params: CompleteType): string => {
  const { transferStatus, statusPart } = params;

  const transferStatusClasses: Record<TransferStatus, string> = {
    Completed: 'bg-[#E1F9ED] text-[#37BD69]',
    'In Progress': 'bg-[#AFEFEB80] text-[#00AFD6]',
    Cancelled: 'bg-[#FA61401A] text-[#FA6140]',
  };

  const statusPartClasses: Record<StatusPart, string> = {
    intact: 'bg-[#E1F9ED] text-[#37BD69]',
    Fertile: 'bg-[#EFF5F2] text-[#006D35]',
    Rotten: 'bg-[#FFD3D399] text-[#FA6140]',
    Broken: 'bg-[#FFD3D399] text-[#FA6140]',
  };

  let classes = '';

  if (transferStatus && transferStatusClasses[transferStatus]) {
    classes = `${transferStatusClasses[transferStatus]}`;
  }

  if (statusPart && statusPartClasses[statusPart]) {
    classes = `${statusPartClasses[statusPart]}`;
  }

  return classes;
};
