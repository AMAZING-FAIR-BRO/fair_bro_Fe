import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PickerRowProps {
  label: string;
  value: string;
  icon: string;
  onPressValue?: () => void; // Thêm prop để xử lý sự kiện nhấn
}

export function PickerRow({ label, value, icon, onPressValue }: PickerRowProps) {
  return (
    <View style={styles.container}>
      {/* Phía bên trái: Icon và Nhãn (Không nhấn được) */}
      <View style={styles.left}>
        <MaterialCommunityIcons name={icon as any} size={20} color="#94a3b8" />
        <Text style={styles.label}>{label}</Text>
      </View>

      {/* Phía bên phải: Giá trị và Mũi tên (Có thể nhấn được) */}
      <TouchableOpacity style={styles.right} onPress={onPressValue} activeOpacity={0.7}>
        <Text style={styles.value}>{value}</Text>
        <MaterialCommunityIcons name="chevron-down" size={20} color="#94a3b8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e293b',
  },
  left: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  right: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  label: { 
    color: '#94a3b8', 
    marginLeft: 10,
    fontSize: 15,
  },
  value: { 
    color: '#fff', 
    fontWeight: '600', 
    marginRight: 4,
    fontSize: 15,
  }
});