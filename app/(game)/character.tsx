import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Character() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link
        className="p-2 bg-blue-500 rounded-md shadow-md overflow-hidden"
        href="/"
      >
        <Text>Character screen</Text>
      </Link>
    </View>
  );
}
