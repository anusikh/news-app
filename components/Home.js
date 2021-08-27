import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyTheme from "../utils/MyTheme";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/splash.png")} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("News")}
      >
        <Text style={styles.button__text}>SEE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: MyTheme.colors.card,
    position: "absolute",
    bottom: 0,
    width: 400,
    height: 50,

    borderRadius: 10,
    justifyContent: "center",
  },
  container: {
    position: "relative",
    height: "98%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button__text: {
    color: MyTheme.colors.white,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    top: "40%",
    bottom: "40%",
  },
});

export default Home;
