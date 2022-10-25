import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sensors from "../screens/Sensors";
import MainTabs from "./MainTabs";
import BarCodeTabs from "./BarCodeTabs";
import Recording from '../screens/Recording'

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
      <MainStack.Screen name="Recording" component={Recording} />
      <MainStack.Screen name="BarCodeTabs" component={BarCodeTabs} />
    </MainStack.Navigator>
  );
};

export default Main;
