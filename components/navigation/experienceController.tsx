import React from "react";
import XPBar from "../xpBar";
import { QuestsButton } from "../questButton";
import { View } from "react-native";

export function ExperienceController() {
  const userExperience = 95 / 100;
  return (
    <View className="align-start w-full">
      <XPBar progress={userExperience} />
      <QuestsButton />
    </View>
  );
}
