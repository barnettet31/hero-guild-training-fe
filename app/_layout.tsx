import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
export const unstable_settings = {
  initialRouteName: "/(game)/",
};
export default function RootLayout() {
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
