import React from "react";
import XPBar from "./xpBar";
import { QuestsButton } from "./questButton";
import { View } from "react-native";

export function GameHeaderLeft() {
  const userExperience = 95 / 100;
  return (
    <View className="align-start w-1/2">
      <XPBar progress={userExperience} />

      <QuestsButton />
    </View>
  );
}
