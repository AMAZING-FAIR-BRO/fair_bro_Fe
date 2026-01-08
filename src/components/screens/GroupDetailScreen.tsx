import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../molecules/Header/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '../atoms/Text/Text';

interface GroupDetailTemplateProps {
  title: string;
  tab: 'expense' | 'balance' | 'setting';
  onTabChange: (tab: 'expense' | 'balance' | 'setting') => void;
  onBack: () => void;
  children: React.ReactNode;
}

export function GroupDetailTemplate({ title, tab, onTabChange, onBack, children }: GroupDetailTemplateProps) {
  return (
    <View style={styles.container}>

      {/* Bottom Tab Bar Tự Chế */}
      <View style={styles.tabBar}>
        <TabItem 
          icon="format-list-bulleted" 
          label="Expenses" 
          active={tab === 'expense'} 
          onPress={() => onTabChange('expense')} 
        />
        <TabItem 
          icon="scale-balance" 
          label="Balance" 
          active={tab === 'balance'} 
          onPress={() => onTabChange('balance')} 
        />
        <TabItem 
          icon="cog-outline" 
          label="Settings" 
          active={tab === 'setting'} 
          onPress={() => onTabChange('setting')} 
        />
      </View>
    </View>
  );
}

// Component nhỏ cho từng nút trên TabBar
function TabItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
      <MaterialCommunityIcons 
        name={icon} 
        size={24} 
        color={active ? '#3b82f6' : '#94a3b8'} 
      />
      <Text style={[styles.tabLabel, { color: active ? '#3b82f6' : '#94a3b8' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  content: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingBottom: 10,
  },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabLabel: { fontSize: 11, marginTop: 4 },
});