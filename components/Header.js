import { StyleSheet, Text, View, Switch, Button } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <Text>Shop</Text>
      <Switch value={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 300,
    width: "100%",
    height: 410,
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 17,
  },
});
