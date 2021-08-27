import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import News from "./components/News";
import { Provider } from "react-redux";
import store from "./redux/store";
import Page from "./components/Page";
import MyTheme from "./utils/MyTheme";

const Stack = createNativeStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: MyTheme.colors.background,
  },
  headerTintColor: MyTheme.colors.white,
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: MyTheme.colors.background,
              },
            }}
            name="News App"
            component={Home}
          />
          <Stack.Screen options={headerStyle} name="News" component={News} />
          <Stack.Screen options={headerStyle} name="Page" component={Page} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
