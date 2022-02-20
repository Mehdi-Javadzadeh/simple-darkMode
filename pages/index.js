import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
} from "react-native";
import { Pressable } from "react-native-web";
import { Wrapper } from "../components/Wrapper";

export default function App(props) {
  let [darkMode, setDarkMode] = useState(false);
  return (
    <View style={styles.global}>
      <Wrapper
        style={
          darkMode && { backgroundColor: "rgba(0,0,0,0.9)" }
        }
      >
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Cards darkMode={darkMode} />

        <Footer darkMode={darkMode} />
      </Wrapper>
    </View>
  );
}
function Header({ darkMode, setDarkMode }) {
  return (
    <View style={styles.header}>
      <Text style={darkMode && { color: "white" }}>
        Shop
      </Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
        }}
      />
    </View>
  );
}

function Cards(darkMode = { darkMode }) {
  return (
    <View style={styles.cards}>
      <Card darkMode={darkMode} />
      <Card darkMode={darkMode} />
    </View>
  );
}

function Card({ darkMode, setDarkMode }) {
  return (
    <View style={styles.card}>
      <View style={[styles.cardImage]}></View>
      <Text style={styles.cardTitle}>Ice Cream</Text>
    </View>
  );
}

function Footer({ darkMode, setDarkMode }) {
  return (
    <View style={styles.footer}>
      <Pressable
        style={[
          {
            color: "white",
            backgroundColor: "black",
            padding: 6,
            paddingHorizontal: 14,
            borderRadius: 10,
          },
          darkMode && {
            backgroundColor: "white",
            color: "black",
          },
        ]}
      >
        Load More
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  card: {
    width: 90,
    height: 90,
    // flexDirection: "row",

    // borderRadius: 8,
  },
  cardImage: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#2ea8ef",
    height: 60,
    width: "100%",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  cardTitle: {
    paddingHorizontal: 12,
    backgroundColor: "#cccccc",
    width: "100%",
    height: 25,
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
