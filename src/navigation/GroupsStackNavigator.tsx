// src/navigation/GroupsStackNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupListScreen from "@/components/screens/GroupListScreen";
import GroupDetailScreen from "@/components/screens/GroupDetailScreen";

const Stack = createNativeStackNavigator();

export default function GroupsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GroupList" component={GroupListScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
    </Stack.Navigator>
  );
}
