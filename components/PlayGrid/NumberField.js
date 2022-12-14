import { StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  FadeIn,
  FadeOutRight,
  ZoomIn,
  FadeOutDown,
  FadeInDown,
  SlideInRight,
  SlideInUp,
  SlideInDown,
  SlideInLeft,
  SlideOutRight,
  SlideOutLeft,
} from "react-native-reanimated";
import { moveAnimationService } from "../../services/playGridServices/moveAnimationService";
import { useEffect, useLayoutEffect } from "react";
import { Colors } from "../../constants/Colors";
import { styleService } from "../../services/playGridServices/styleService";

function NumberField(props) {
  let isMoved = false;
  let isPoped = false;
  let customGridStyle = styleService(props.value)[0];
  let customTextStyle = styleService(props.value)[1];
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  //SHARED VALUES
  // const offsetX = useSharedValue(0);
  // const offsetY = useSharedValue(0);
  // const opacity = useSharedValue(1);
  // const scale = useSharedValue(0);

  // if (props.steps !== 0) {
  //   isMoved = true;
  // }

  // if (props.isNew === true || props.isMerged === true) {
  //   isPoped = true;
  // }

  // ANIMATIONS WITH SHARED VALUE

  //   const animatedStyles = useAnimatedStyle(() => {
  //     return {
  //       transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  //       opacity: opacity.value,
  //     };
  //   }, []);

  //   const animatedTextStyles = useAnimatedStyle(() => {
  //     return {
  //       transform: [{ scale: scale.value }],
  //     };
  //   }, []);

  //   useLayoutEffect(() => {
  //     if (isMoved === true) {
  //       const pixelsToMoveHorizontal = windowsWidth (NEED TO BE DEFINED CORRECTLY FOR ANIMATION)
  //        const pixelsToMoveVertical = windowsHeight (NEED TO BE DEFINED CORRECTLY FOR ANIMATION)
  //       if (props.direction === "LEFT" || props.direction === "RIGHT") {
  // const move = moveAnimationService(
  //   props.direction,
  //   props.steps,
  //   pixelsToMoveHorizontal
  // );
  //         offsetX.value = withTiming(move, { duration: 500 });
  //       } else if (props.direction === "UP" || props.direction === "DOWN") {
  // const move = moveAnimationService(
  //   props.direction,
  //   props.steps,
  //   pixelsToMoveVerical
  // );
  //         offsetY.value = withTiming(move, { duration: 500 });
  //       }

  //       opacity.value = withTiming(0, { duration: 200 });
  //     }
  //   });

  //   useLayoutEffect(() => {
  //     if (isPoped === true) {
  //       scale.value = withSpring(1);
  //     }
  //   });

  //   return (
  //     <View style={styles.border}>
  //       <Animated.View
  //         style={
  //           isMoved
  //             ? [styles.gridTextContainer, customGridStyle, animatedStyles]
  //             : [styles.gridTextContainer, customGridStyle]
  //         }
  //       >
  //         {props.value === 0 ? (
  //           <Animated.Text
  //             style={
  //               props.isNew
  //                 ? [customTextStyle, animatedTextStyles]
  //                 : customTextStyle
  //             }
  //           ></Animated.Text>
  //         ) : (
  //           <Animated.Text
  //             style={
  //               props.isNew
  //                 ? [customTextStyle, animatedTextStyles]
  //                 : customTextStyle
  //             }
  //           >
  //             {props.value}
  //           </Animated.Text>
  //         )}
  //       </Animated.View>
  //     </View>
  //   );
  // }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // ANIMATIONS WITH LAYOUT ANIMATION

  //   if (props.direction === "UP") {
  //     return (
  //       <View style={styles.border}>
  //         <Animated.View
  //           entering={isMoved && SlideInDown}
  //           style={[styles.gridTextContainer, customGridStyle]}
  //         >
  //           {props.value === 0 ? (
  //             <Animated.Text style={customTextStyle}></Animated.Text>
  //           ) : (
  //             <Animated.Text entering={isPoped && ZoomIn} style={customTextStyle}>
  //               {props.value}
  //             </Animated.Text>
  //           )}
  //         </Animated.View>
  //       </View>
  //     );
  //   }

  //   if (props.direction === "DOWN") {
  //     return (
  //       <View style={styles.border}>
  //         <Animated.View
  //           entering={isMoved && SlideInUp}
  //           style={[styles.gridTextContainer, customGridStyle]}
  //         >
  //           {props.value === 0 ? (
  //             <Animated.Text style={customTextStyle}></Animated.Text>
  //           ) : (
  //             <Animated.Text entering={isPoped && ZoomIn} style={customTextStyle}>
  //               {props.value}
  //             </Animated.Text>
  //           )}
  //         </Animated.View>
  //       </View>
  //     );
  //   }

  //   if (props.direction === "LEFT") {
  //     return (
  //       <View style={styles.border}>
  //         <Animated.View
  //           entering={isMoved && SlideInRight}
  //           style={[styles.gridTextContainer, customGridStyle]}
  //         >
  //           {props.value === 0 ? (
  //             <Animated.Text style={customTextStyle}></Animated.Text>
  //           ) : (
  //             <Animated.Text entering={isPoped && ZoomIn} style={customTextStyle}>
  //               {props.value}
  //             </Animated.Text>
  //           )}
  //         </Animated.View>
  //       </View>
  //     );
  //   }

  //   if (props.direction === "RIGHT") {
  //     return (
  //       <View style={styles.border}>
  //         <Animated.View
  //           entering={props.steps > 0 && SlideInLeft}
  //           style={[styles.gridTextContainer, customGridStyle]}
  //         >
  //           {props.value === 0 ? (
  //             <Animated.Text style={customTextStyle}></Animated.Text>
  //           ) : (
  //             <Animated.Text entering={isPoped && ZoomIn} style={customTextStyle}>
  //               {props.value}
  //             </Animated.Text>
  //           )}
  //         </Animated.View>
  //       </View>
  //     );
  //   }
  //   if (props.direction === "") {
  //     return (
  //       <View style={styles.border}>
  //         <Animated.View style={[styles.gridTextContainer, customGridStyle]}>
  //           {props.value === 0 ? (
  //             <Animated.Text style={customTextStyle}></Animated.Text>
  //           ) : (
  //             <Animated.Text style={customTextStyle}>{props.value}</Animated.Text>
  //           )}
  //         </Animated.View>
  //       </View>
  //     );
  //   }
  // }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //NO ANIMATIONS

  return (
    <View style={styles.border}>
      <View style={[styles.gridTextContainer, customGridStyle]}>
        {props.value === 0 ? (
          <Text style={customTextStyle}></Text>
        ) : (
          <Text style={customTextStyle}>{props.value}</Text>
        )}
      </View>
    </View>
  );
}

export default NumberField;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    borderColor: Colors.mediumBrown,
    borderWidth: 6,
  },

  gridTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
