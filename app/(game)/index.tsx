import { CharacterModel } from "@/components/characterModel";
import React from "react";

import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Index() {
  return (
    <GestureHandlerRootView className="flex-1 justify-center items-center">
      <CharacterModel />
    </GestureHandlerRootView>
  );
}
