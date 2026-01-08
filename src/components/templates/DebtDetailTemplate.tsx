import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Debt } from '@/domain/models/Debt';
import { currency } from '@/constants/currency';
import { DebtList } from '@/components/organisms/DebtList/DebtList';

interface DebtDetailTemplateProps {
  debts: Debt[];
  totalAmount: number;
  onRemind: (id: string) => void;
  onSettle: (id: string) => void;
}

export const DebtDetailTemplate: React.FC<DebtDetailTemplateProps> = ({
  debts,
  totalAmount,
  onRemind,
  onSettle,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>TỔNG SỐ TIỀN NHẬN LẠI</Text>
          <Text style={styles.summaryAmount}>{currency(totalAmount)}</Text>
        </View>

        {/* List of Debts */}
        <View style={styles.listContainer}>
          <DebtList debts={debts} onRemind={onRemind} onSettle={onSettle} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121225', // Main background color
  },
  container: {
    flex: 1,
    padding: 16,
  },
  summaryCard: {
    backgroundColor: '#1E1E30',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  summaryLabel: {
    color: '#A0A0B0',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  summaryAmount: {
    color: '#00E676',
    fontSize: 32,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
});