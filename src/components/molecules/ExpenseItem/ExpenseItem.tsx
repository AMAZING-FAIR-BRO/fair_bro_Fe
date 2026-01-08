import { View, StyleSheet } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import { Ionicons } from '@expo/vector-icons';

export interface ExpenseItemProps {
  title: string;
  paidBy: string;
  amount: number;
  date: string;
  youPaid?: boolean;
  youOwe?: number;
  icon?: 'utensils' | 'car' | 'gift';
}

export function ExpenseItem({
  title,
  paidBy,
  amount,
  date,
  youPaid,
  youOwe,
  icon = 'gift',
}: ExpenseItemProps) {
  // Chọn màu theo loại icon
  const iconColor =
    icon === 'utensils' ? '#dc2626' :
    icon === 'car' ? '#3b82f6' :
    '#a855f7';

  // Chọn icon name
  const iconName =
    icon === 'utensils' ? 'restaurant' :
    icon === 'car' ? 'car-sport' :
    'gift';

  return (
    <View style={styles.card}>
      {/* Icon bên trái */}
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
        <Ionicons name={iconName as any} size={20} color="#fff" />
      </View>

      {/* Nội dung chính */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>{paidBy} paid • {date}</Text>
      </View>

      {/* Số tiền */}
      <View style={styles.right}>
        <Text style={[styles.amount, youPaid && styles.paid]}>
          {youPaid ? '+' : ''}{amount.toLocaleString()} đ
        </Text>
        {youOwe && <Text style={styles.owe}>You owe {youOwe.toLocaleString()} đ</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: { flex: 1 },
  right: { alignItems: 'flex-end' },
  title: { color: '#020617', fontSize: 16, fontWeight: '600' },
  sub: { color: '#aaa', fontSize: 12, marginTop: 4 },
  amount: { color: '#020617', fontSize: 16, fontWeight: '600' },
  paid: { color: '#22c55e' },
  owe: { color: '#ef4444', fontSize: 12, marginTop: 4 },
});
