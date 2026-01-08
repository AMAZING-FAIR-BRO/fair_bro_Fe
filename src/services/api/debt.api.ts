import { Debt } from "@/domain/models/Debt";

// Mock data based on the provided image
const MOCK_DEBTS: Debt[] = [
  { id: '1', debtorName: 'Bình', creditorName: 'Nguyễn Phúc Thịnh (bạn)', amount: 198500, currency: 'VND', status: 'pending' },
  { id: '2', debtorName: 'Hiếu', creditorName: 'Nguyễn Phúc Thịnh (bạn)', amount: 98500, currency: 'VND', status: 'pending' },
  { id: '3', debtorName: 'Hoa', creditorName: 'Nguyễn Phúc Thịnh (bạn)', amount: 108500, currency: 'VND', status: 'pending' },
];

export const getDebts = async (): Promise<Debt[]> => {
  // Simulate API delay
  return new Promise((resolve) => setTimeout(() => resolve([...MOCK_DEBTS]), 500));
};

export const remindDebt = async (id: string): Promise<boolean> => {
  console.log(`[API] Push Notification sent to debt ID: ${id}`);
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
};

export const settleDebt = async (id: string): Promise<boolean> => {
  console.log(`[API] Debt settled for ID: ${id}`);
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
};
