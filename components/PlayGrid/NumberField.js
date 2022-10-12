import { StyleSheet, View, Text } from "react-native";
import { styleService } from "./service/styleService";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
//   withSpring,
//   FadeIn,
//   FadeOutRight,
//   ZoomIn,
//   FadeOutDown,
//   FadeInDown,
//   SlideInRight,
//   SlideInUp,
//   SlideInDown,
//   SlideInLeft,
//   SlideOutRight,
//   SlideOutLeft,
// } from "react-native-reanimated";
// import { moveAnimationService } from "./service/moveAnimationService";
// import { useEffect, useLayoutEffect } from "react";
import { Colors } from "../common/Colors";

function NumberField(props) {
  // let isMoved = false;
  // let isPoped = false;
  let customGridStyle = styleService(props.value)[0];
  let customTextStyle = styleService(props.value)[1];

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
  //       const move = moveAnimationService(props.direction, props.steps);

  //       if (props.direction === "LEFT" || props.direction === "RIGHT") {
  //         offsetX.value = withTiming(move, { duration: 200 });
  //       } else if (props.direction === "UP" || props.direction === "DOWN") {
  //         offsetY.value = withTiming(move, { duration: 200 });
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
    borderColor: Colors.mediumBrown,
    borderWidth: 6,
    flex: 1,
  },

  gridTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
