import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import MyTheme from "../utils/MyTheme";
import { dateUtil } from "../utils/Utility";

function Card({ navigation, data, x }) {
  return (
    <TouchableOpacity
      key={x}
      style={styles.container}
      onPress={() => {
        navigation.navigate("Page", {
          data: { data },
        });
      }}
    >
      <Image style={styles.Card__image} source={{ uri: data.urlToImage }} />
      <Text style={styles.Card__content}>{data.description}</Text>
      <Text style={styles.Card__subContent}>
        By: {data.author} {dateUtil(data.publishedAt)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: MyTheme.colors.card,
    shadowColor: MyTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 10,
    padding: 10,
    elevation: 6,
  },
  Card__content: {
    color: MyTheme.colors.white,
    fontWeight: "bold",
  },
  Card__subContent: {
    color: MyTheme.colors.pink,
    marginTop: 10,
  },
  Card__image: {
    height: 200,
    width: "100%",
    resizeMode: "stretch",
  },
});

export default Card;
