export interface Debt {
  id: string;
  debtorName: string;
  creditorName: string;
  amount: number;
  currency: string;
  status: 'pending' | 'paid';
}
