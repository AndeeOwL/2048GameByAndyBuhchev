import { View, Text, StyleSheet } from "react-native";
import { stylesGlobal } from "./constants/stylesGlobal";

function NumberField(props) {
  if (props.value === 0) {
    return (
      <View style={styles.gridTextContainer}>
        {<Text style={styles.gridText}></Text>}
      </View>
    );
  } else if (props.value === 2) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs2}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 4) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs4}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 8) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs8}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 16) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs16}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 32) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs32}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 64) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs64}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 128) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs128}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 256) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs256}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 512) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs512}>
        {<Text style={styles.gridText}>{props.value}</Text>}
      </View>
    );
  } else if (props.value === 1024) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs1024}>
        {
          <Text style={stylesGlobal.textContainerIfNumberIs1024}>
            {props.value}
          </Text>
        }
      </View>
    );
  } else if (props.value === 2048) {
    return (
      <View style={stylesGlobal.gridTextContainerIfNumberIs2048}>
        {
          <Text style={stylesGlobal.textContainerIfNumberIs2048}>
            {props.value}
          </Text>
        }
      </View>
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
