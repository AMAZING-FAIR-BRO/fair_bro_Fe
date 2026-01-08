import { Debt } from '@/domain/models/Debt';
import { currency } from '@/constants/currency';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface DebtItemProps {
  debt: Debt;
  onRemind: (id: string) => void;
  onSettle: (id: string) => void;
}

export const DebtItem: React.FC<DebtItemProps> = ({ debt, onRemind, onSettle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.bold}>{debt.debtorName}</Text> nợ {debt.creditorName}
      </Text>
      
      <Text style={styles.amount}>{currency(debt.amount)}</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity 
          style={[styles.button, styles.outlineButton]} 
          onPress={() => onRemind(debt.id)}
        >
          <Text style={styles.outlineButtonText}>Nhắc nợ</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.filledButton]} 
          onPress={() => onSettle(debt.id)}
        >
          <Text style={styles.filledButtonText}>Đã thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E30', // Dark card background
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  amount: {
    color: '#00E676', // Green color
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#4A4A60',
  },
  outlineButtonText: {
    color: '#A0A0B0',
  },
  filledButton: {
    backgroundColor: '#536DFE', // Blue color
  },
  filledButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
