// components/atoms/Input/Input.tsx
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Hoặc thư viện icon bạn dùng

interface Props extends TextInputProps {
  iconName?: string;
}

export function Input({ iconName, style, ...props }: Props) {
  return (
    <View style={[styles.container, style]}>
      {iconName && <MaterialCommunityIcons name={iconName as any} size={20} color="#94a3b8" style={styles.icon} />}
      <TextInput
        {...props}
        placeholderTextColor="#64748b"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a', // Màu nền tối hơn card
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    height: 48,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, color: '#fff', fontSize: 16 },
});