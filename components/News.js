import { setContext } from "@redux-saga/core/effects";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/reducer";
import Card from "./Card";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function News({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const news = useSelector((state) => state.news.news);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      dispatch(getNews());
    });
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        ></RefreshControl>
      }
    >
      <View>
        {news &&
          Object.keys(news.articles).map((x) => {
            return (
              <View key={x}>
                <Card data={news.articles[x]} val={x} navigation={navigation} />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}

export default News;
