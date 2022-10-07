import { StyleSheet, View } from "react-native";
import { styleService } from "./service/styleService";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { moveAnimationService } from "./service/moveAnimationService";
import { useEffect, useLayoutEffect } from "react";

function NumberField(props) {
  let isMerged = props.isMerged;
  let isNew = props.isMerged;
  let isMoved = false;
  let steps = props.steps;
  let direction = props.direction;
  let customGridStyle = styleService(props.value)[0];
  let customTextStyle = styleService(props.value)[1];
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0);

  if (steps !== 0) {
    isMoved = true;
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
      opacity: opacity.value,
    };
  }, []);
  const animatedTextStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);

  if (isNew === true || isMerged === true) {
    useLayoutEffect(() => {
      scale.value = withSpring(1);
    }, []);
  }

  if (isMoved === true) {
    useLayoutEffect(() => {
      const move = moveAnimationService(direction, steps);

      if (direction === "LEFT" || direction === "RIGHT") {
        offsetX.value = withTiming(move, { duration: 100 });
      } else if (direction === "UP" || direction === "DOWN") {
        offsetY.value = withTiming(move, { duration: 100 });
      }

      opacity.value = withTiming(0, { duration: 100 });
    }, []);
  }

  return (
    <View style={styles.border}>
      <Animated.View
        style={
          isMoved
            ? [styles.gridTextContainer, customGridStyle, animatedStyles]
            : [styles.gridTextContainer, customGridStyle]
        }
      >
        {props.value === 0 ? (
          <Animated.Text
            style={
              isNew ? [customTextStyle, animatedTextStyles] : customTextStyle
            }
          ></Animated.Text>
        ) : (
          <Animated.Text
            style={
              isNew ? [customTextStyle, animatedTextStyles] : customTextStyle
            }
          >
            {props.value}
          </Animated.Text>
        )}
      </Animated.View>
    </View>
  );
}

export default NumberField;

const styles = StyleSheet.create({
  border: {
    borderColor: "#917c7c",
    borderWidth: 6,
    flex: 1,
  },

  gridTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
