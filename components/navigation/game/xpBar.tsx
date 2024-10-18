import { useEffect, useRef } from "react";
import { View } from "react-native";
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
      testID="xp-bar"
      className="bg-gray-500 h-4 rounded-md w-full overflow-hidden mb-4"
      onLayout={(e) => (parentWidth.current = e.nativeEvent.layout.width)}
    >
      <Animated.View
        testID="child-xp"
        className="bg-blue-600 h-full"
        style={{ width: animatedWidth }}
      />
    </View>
  );
}
