import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: 'usd' | 'balance' | 'settings-outline';
  label: string;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export function IconButton({ icon, label, active, onPress, style }: IconButtonProps) {
  let IconComponent: any = Ionicons;
  let iconName: string = icon;

  // Mapping icon strings
  switch (icon) {
    case 'usd':
      IconComponent = FontAwesome;
      iconName = 'usd';
      break;
    case 'balance':
      IconComponent = FontAwesome;
      iconName = 'balance-scale';
      break;
    case 'settings-outline':
      IconComponent = Ionicons;
      iconName = 'settings-outline';
      break;
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <IconComponent
        name={iconName as any}
        size={24}
        color={active ? '#3b82f6' : '#94a3b8'}
      />
      <Text style={[styles.label, { color: active ? '#3b82f6' : '#94a3b8' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
