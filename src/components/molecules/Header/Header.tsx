import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  subTitle?: string;    
  rightText?: string;  
  onRightPress?: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

export function Header({ title, subTitle, rightText, onRightPress, onBack, showBack = true }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Nút Back bên trái */}
      <View style={styles.sideContainer}>
        {showBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#020617" />
          </TouchableOpacity>
        )}
      </View>

      {/* Tiêu đề ở giữa */}
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        {subTitle && <Text style={styles.subTitleText}>{subTitle}</Text>}
      </View>

      {/* Chữ bên phải (Balance) */}
      <View style={styles.sideContainer}>
        {rightText && (
          <TouchableOpacity onPress={onRightPress} style={styles.rightButton}>
            <Text style={styles.rightText}>{rightText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,        
    paddingTop: 30,      
    backgroundColor: '#F3F4F6', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sideContainer: {
    width: 60,     
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: 4,
  },
  titleText: {
    color: '#020617',
    fontSize: 17,
    fontWeight: '700',
  },
  subTitleText: {
    color: '#94a3b8',   
    fontSize: 12,
    marginTop: 2,
  },
  rightButton: {
    alignItems: 'flex-end',
  },
  rightText: {
    color: '#3b82f6',  
    fontSize: 15,
    fontWeight: '600',
  },
});