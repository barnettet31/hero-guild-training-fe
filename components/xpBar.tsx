import { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
interface IXPBarProps {
  progress: number;
}

export default function XPBar({ progress }: IXPBarProps) {
  const animatedWidth = useSharedValue(progress);
  const parentWidth = useRef<number>();
  useEffect(() => {
    if (!parentWidth.current) return;
    animatedWidth.value = withTiming(progress * parentWidth.current);
  }, [progress, animatedWidth]);
  return (
    <View
      className="bg-gray-500 h-4 rounded-md w-1/2 mx-4"
      onLayout={(e) => (parentWidth.current = e.nativeEvent.layout.width)}
    >
      <Animated.View
        className="bg-blue-600 h-full"
        style={{ width: animatedWidth }}
      />
    </View>
  );
}
