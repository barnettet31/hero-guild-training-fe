import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { OpacityLink } from "@/components/link";
export function GameFooter() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="absolute z-10 px-4 w-full"
      style={{ bottom: insets.bottom - 2 }}
    >
      <View className="w-full p-2 flex-row justify-between">
        <OpacityLink to="/(account)/bag">
          <FontAwesome6 name="bag-shopping" size={36} color="white" />
        </OpacityLink>
        <OpacityLink to="/(account)/">
          <FontAwesome name="cog" size={36} color="white" />
        </OpacityLink>
      </View>
    </View>
  );
}
