import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sensors from "../screens/Sensors";
import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Sensory" component={Sensors} />
    </MainStack.Navigator>
  );
};

export default Main;
