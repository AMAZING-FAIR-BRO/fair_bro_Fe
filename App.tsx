import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AddExpenseScreen } from './src/components/screens/AddExpenseScreen';

import { GroupDetail_SettingScreen } from './src/components/screens/GroupDetail_SettingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    // 2. Bọc toàn bộ ứng dụng ở đây
    <SafeAreaProvider>
      <AddExpenseScreen />
    </SafeAreaProvider>
  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
