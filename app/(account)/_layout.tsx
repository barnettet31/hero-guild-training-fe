import { Slot, Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AccountLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      className="bg-slate-600"
      style={{ paddingTop: insets.top, flex: 1 }}
    >
      <Slot />

      <StatusBar hidden />
    </SafeAreaView>
  );
}
