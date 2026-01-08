import { View, StyleSheet } from 'react-native';
import { ExpenseItem } from '../../molecules/ExpenseItem/ExpenseItem';

export function ExpenseList({ expenses }: { expenses: any[] }) {
  return (
    <View style={styles.list}>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          paidBy={item.paidBy}
          amount={item.amount}
          date={item.date}
          youPaid={item.youPaid}
          youOwe={item.youOwe}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
  },
});
