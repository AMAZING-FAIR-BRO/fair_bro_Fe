import { useState } from 'react';
import { GroupDetailTemplate } from '../templates/GroupDetailTemplate';
import { AddExpenseTemplate } from '../templates/AddExpenseTemplate';
import { GroupDetail_SettingScreen } from './GroupDetail_SettingScreen';

export function AddExpenseScreen() {
  const [tab, setTab] = useState<'expense' | 'balance' | 'setting'>('expense');

  // ✅ Dữ liệu mẫu
  const expenses = [
    {
      id: '1',
      title: 'Dinner at Haidilao 🍲',
      paidBy: 'You',
      amount: 1500000,
      date: 'Yesterday',
      youPaid: true,
    },
    {
      id: '2',
      title: 'Grab to Hotel 🚗',
      paidBy: 'Sarah',
      amount: 120000,
      date: 'Today 14:30',
      youOwe: 30000,
    },
    {
      id: '3',
      title: 'Snacks & Drinks 🥤',
      paidBy: 'Mike',
      amount: 450000,
      date: 'Yesterday',
      youOwe: 150000,
    },
  ];

  return (
    <GroupDetailTemplate
        title="Da Lat Trip"
        tab={tab}
        onTabChange={setTab}
        onBack={() => console.log('Back pressed')}
        >
        {tab === 'expense' && <AddExpenseTemplate expenses={expenses} />}
        
        {/* Thêm tab Setting */}
        {tab === 'setting' && (
            <GroupDetail_SettingScreen />
        )}
    </GroupDetailTemplate>
  );
}
