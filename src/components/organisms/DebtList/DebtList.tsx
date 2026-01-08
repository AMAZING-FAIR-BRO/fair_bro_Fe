import React from 'react';
import { FlatList, View } from 'react-native';
import { Debt } from '@/domain/models/Debt';
import { DebtItem } from '@/components/molecules/DebtItem/DebtItem';

interface DebtListProps {
  debts: Debt[];
  onRemind: (id: string) => void;
  onSettle: (id: string) => void;
}

export const DebtList: React.FC<DebtListProps> = ({ debts, onRemind, onSettle }) => {
  return (
    <FlatList
      data={debts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <DebtItem 
          debt={item} 
          onRemind={onRemind} 
          onSettle={onSettle} 
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};