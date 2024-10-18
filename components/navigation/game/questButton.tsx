import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link, useNavigation } from "expo-router";
import { OpacityLink } from "@/components/link";
export function QuestsButton() {
  const navigate = useNavigation();

  return (
    <OpacityLink to="/quests">
      <FontAwesome6 name="list-check" size={24} color="white" />
    </OpacityLink>
  );
}
