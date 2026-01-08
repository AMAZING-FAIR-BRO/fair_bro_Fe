import { View, StyleSheet } from 'react-native';
import { IconButton } from '../../atoms/IconButton/IconButton';

interface BottomNavbarProps {
  active: 'expense' | 'balance' | 'setting';
  onChange: (tab: 'expense' | 'balance' | 'setting') => void;
}

export function BottomNavbar({ active, onChange }: BottomNavbarProps) {
  return (
    <View style={styles.container}>
      <IconButton
        icon="usd"
        label="Expense"
        active={active === 'expense'}
        onPress={() => onChange('expense')}
      />
      <IconButton
        icon="balance"
        label="Balance"
        active={active === 'balance'}
        onPress={() => onChange('balance')}
      />
      <IconButton
        icon="settings-outline"
        label="Setting"
        active={active === 'setting'}
        onPress={() => onChange('setting')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#1a2332',
    borderTopWidth: 1,
    borderTopColor: '#2c3e50',
  },
});
