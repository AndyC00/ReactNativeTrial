import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return(
    <Stack screenOptions={{
        headerStyle: {backgroundColor: "orange"},
        headerTintColor: "white"
      }}>
      <Stack.Screen name="index" options={{title: "Home"}}/>
      <Stack.Screen name="about" options={{title: "About"}}/>
    </Stack>
    );
}
