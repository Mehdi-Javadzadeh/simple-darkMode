import { StyleSheet, Text, View } from "react-native";

export function Wrapper({ children, style }) {
  return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 300,
    width: "100%",
    height: 410,
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 17,
    borderRadius: 20,
  },
});
