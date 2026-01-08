import React from 'react';
import { DebtDetailTemplate } from '../templates/DebtDetailTemplate';
import { ActivityIndicator, View } from 'react-native';
import { useDebtDetail } from '@/viewmodels/useDebtDetail';

export const DebtDetailScreen = () => {
  const { debts, totalAmount, loading, handleRemind, handleSettle } = useDebtDetail();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121225' }}>
        <ActivityIndicator size="large" color="#536DFE" />
      </View>
    );
  }

  return (
    <DebtDetailTemplate
      debts={debts}
      totalAmount={totalAmount}
      onRemind={handleRemind}
      onSettle={handleSettle}
    />
  );
};