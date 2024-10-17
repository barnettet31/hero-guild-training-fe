import { SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExperienceController } from "./experienceController";

export default function GameHeader() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      className="bg-transparent justify-between flex-row absolute w-full"
      style={{ top: insets.top, paddingHorizontal: 10 }}
    >
      <ExperienceController />
      <Text className="text-red-500">User Icon</Text>
    </SafeAreaView>
  );
}
