import { View, StyleSheet } from 'react-native';
import { Header } from '../molecules/Header/Header';
import { BottomNavbar } from '../organisms/BottomNavbar/BottomNavbar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface GroupDetailTemplateProps {
  title: string;
  children: React.ReactNode;
  tab: 'expense' | 'balance' | 'setting';
  onTabChange: (tab: any) => void;
  onBack: () => void;
}

export function GroupDetailTemplate({
  title,
  children,
  tab,
  onTabChange,
  onBack,
}: GroupDetailTemplateProps) {
    const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* Header cố định cho mọi tab trong nhóm */}
      <Header 
        title={title} 
        subTitle="5 Members" 
        onBack={onBack}
        rightText="Balance"
        onRightPress={() => onTabChange('balance')}
      />
      
      <View style={styles.content}>{children}</View>
      
      <View style={{ backgroundColor: '#161f30', paddingBottom: insets.bottom }}>
        <BottomNavbar active={tab} onChange={onTabChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  content: { flex: 1 },
});