import React, { useRef } from "react";
import { View, PanResponder, Text, StyleSheet, Animated } from "react-native";

export default function Index() {
  // Position of the character
  const pan = useRef(new Animated.ValueXY());

  // PanResponder to handle drag events
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null, // Ignore native event
          { dx: pan.current.x, dy: pan.current.y }, // Map gesture movement to x and y
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // Animate back to the original position (0,0)
        Animated.spring(pan.current, {
          toValue: { x: 0, y: 0 }, // Snap back to this position
          useNativeDriver: false, // Required when animating styles in React Native
        }).start();
      },
    })
  );

  return (
    <View style={styles.container}>
      {/* Character or any element to be dragged */}
      <Animated.View
        style={[pan.current.getLayout(), styles.character]}
        {...panResponder.current.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  character: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
