import React, { useRef } from "react";
import { View, PanResponder, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-600">
      <Text className="text-center text-xl m-3">Drag to control the game</Text>
      <Text className="text-lg text-center m-3 text-blue-600">
        Current Direction:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  direction: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "blue",
  },
});
