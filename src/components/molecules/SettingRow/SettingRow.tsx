import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface SettingRowProps {
  label: string;
  value?: string;
  isLast?: boolean;
  onPress?: () => void;
  destructive?: boolean;
}

export function SettingRow({ label, value, isLast, onPress, destructive }: SettingRowProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, isLast && { borderBottomWidth: 0 }]} 
      onPress={onPress}
    >
      <Text style={[styles.label, destructive && { color: '#ef4444' }]}>{label}</Text>
      <View style={styles.right}>
        {value && <Text style={styles.value}>{value}</Text>}
        <MaterialCommunityIcons 
          name="chevron-right" 
          size={20} 
          color={destructive ? '#ef4444' : '#94a3b8'} 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e293b',
  },
  right: { flexDirection: 'row', alignItems: 'center' },
  label: { color: '#020617', fontSize: 16 },
  value: { color: '#94a3b8', marginRight: 8 },
});