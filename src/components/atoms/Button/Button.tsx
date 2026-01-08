import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({ title, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.defaultButton, style]} 
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});