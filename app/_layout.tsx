import GameHeader from "@/components/navigation/gameHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{header:(props)=><GameHeader/>}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
