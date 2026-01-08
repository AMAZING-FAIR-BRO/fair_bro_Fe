import { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { Debt } from '@/domain/models/Debt';
import { getDebts, remindDebt, settleDebt } from '@/services/api/debt.api';

export const useDebtDetail = () => {
  const [debts, setDebts] = useState<Debt[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDebts();
  }, []);

  const fetchDebts = async () => {
    setLoading(true);
    try {
      const data = await getDebts();
      setDebts(data);
    } catch (error) {
      console.error('Failed to fetch debts', error);
      Alert.alert('Lỗi', 'Không thể tải danh sách nợ.');
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = useMemo(() => {
    return debts.reduce((sum, debt) => sum + debt.amount, 0);
  }, [debts]);

  const handleRemind = async (id: string) => {
    try {
      await remindDebt(id);
      Alert.alert('Thành công', 'Đã gửi thông báo nhắc nợ.');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể gửi thông báo.');
    }
  };

  const handleSettle = async (id: string) => {
    try {
      await settleDebt(id);
      Alert.alert('Thành công', 'Đã xác nhận thanh toán.', [
        { text: 'OK', onPress: () => setDebts((prev) => prev.filter((d) => d.id !== id)) }
      ]);
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể xác nhận thanh toán.');
    }
  };

  return {
    debts,
    totalAmount,
    loading,
    handleRemind,
    handleSettle,
  };
};
