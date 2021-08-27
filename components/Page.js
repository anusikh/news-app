import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyTheme from "../utils/MyTheme";
import { dateUtil } from "../utils/Utility";

function Page({ route }) {
  const data = route.params.data.data;

  return (
    <View style={styles.container}>
      <Image style={styles.Page__image} source={{ uri: data.urlToImage }} />
      <Text style={styles.Page__title}>{data.title}</Text>
      <Text style={styles.Page__subTitle}>
        By: {data.author}, {dateUtil(data.publishedAt)}
      </Text>
      <Text style={styles.Page__content}>{data.content}</Text>
      <TouchableOpacity
        style={styles.Page__button}
        onPress={() => {
          Linking.openURL(data.url);
        }}
      >
        <Text style={styles.Page__button__text}>VISIT SITE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: MyTheme.colors.card,
    height: "98%",
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
  Page__title: {
    color: MyTheme.colors.white,
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  Page__subTitle: {
    color: MyTheme.colors.pink,
    marginBottom: 20,
  },
  Page__image: {
    height: 200,
    width: "100%",
    resizeMode: "stretch",
  },
  Page__content: {
    color: MyTheme.colors.white,
    fontSize: 20,
    marginBottom: 20,
  },
  Page__button: {
    backgroundColor: MyTheme.colors.pink,
    padding: 19,
    borderRadius: 10,
    width: "30%",
    display: "flex",
    alignItems: "center",
  },
  Page__button__text: {
    color: MyTheme.colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Page;
