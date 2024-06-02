export type TransferStatus = 'Completed' | 'In Progress' | 'Cancelled';
export type StatusPart = 'intact' | 'Fertile' | 'Broken' | 'Rotten';

export interface CompleteType {
  transferStatus?: TransferStatus;
  statusPart?: StatusPart;
}
