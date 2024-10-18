import { View } from "react-native";
import { GameHeaderLeft } from "./gameHeaderLeft";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CharacterPortrait } from "./characterPortrait";
export default function GameHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View className="absolute z-10 px-4" style={{ top: insets.top + 2 }}>
      <View className="rounded-lg shadow-lg border-black border p-2 relative bg-green-800">
        <View className="flex-row w-full justify-between">
          <GameHeaderLeft />
          <CharacterPortrait />
        </View>
      </View>
    </View>
  );
}
