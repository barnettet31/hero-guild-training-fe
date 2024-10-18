import { OpacityLink } from "@/components/link";
import { View, Text } from "react-native";

export default function Bag() {
  return (
    <View className="flex-1 justify-center items-center">
      <OpacityLink
        classNames="p-2 bg-blue-500 rounded-md shadow-md"
        to="/(game)/"
      >
        <Text>Bag page</Text>
      </OpacityLink>
    </View>
  );
}
