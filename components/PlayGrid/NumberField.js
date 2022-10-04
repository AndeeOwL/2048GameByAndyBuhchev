import { View, Text, StyleSheet } from "react-native";
import { stylesGlobal } from "./constants/stylesGlobal";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function NumberField(props) {
  // if moved animate with correct X Y
  // if poped new or merged Become bigger

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  if (props.value === 0) {
    return (
      <Animated.View style={styles.gridTextContainer}>
        {<Text style={styles.gridText}></Text>}
      </Animated.View>
    );
  } else if (props.value === 2) {
    offset.value = withTiming(5, { duration: 500 });

    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs2, animatedStyles]}
      >
        {<Animated.Text style={styles.gridText}>{props.value}</Animated.Text>}
      </Animated.View>
    );
  } else if (props.value === 4) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs4, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 8) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs8, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 16) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs16, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 32) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs32, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 64) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs64, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 128) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs128, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 256) {
    offset.value = withTiming(5);

    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs256, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 512) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs512, animatedStyles]}
      >
        {<Text style={styles.gridText}>{props.value}</Text>}
      </Animated.View>
    );
  } else if (props.value === 1024) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs1024, animatedStyles]}
      >
        {
          <Text style={stylesGlobal.textContainerIfNumberIs1024}>
            {props.value}
          </Text>
        }
      </Animated.View>
    );
  } else if (props.value === 2048) {
    offset.value = withTiming(5);
    return (
      <Animated.View
        style={[stylesGlobal.gridTextContainerIfNumberIs2048, animatedStyles]}
      >
        {
          <Text style={stylesGlobal.textContainerIfNumberIs2048}>
            {props.value}
          </Text>
        }
      </Animated.View>
    );
  }
}

export default NumberField;

const styles = StyleSheet.create({
  gridTextContainer: {
    flex: 1,
    backgroundColor: "#c9bdbd",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gridText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4d4646",
  },
  gridTextContainerIfNumberIs2: {
    flex: 1,
    backgroundColor: "#ebe8da",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
