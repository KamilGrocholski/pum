import React, { useState } from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons, Entypo, MaterialIcons, Fontisto } from "@expo/vector-icons";
import FeatureButton from "../components/utils/FeatureButton";
import { Recorder } from "../components/Audio";


export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Sensory">) {

  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Dyktafon"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => {
            navigation.goBack()
        }}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          overflow: 'scroll'
        }}
      >        
        <Recorder />
      </View>
    </Layout>
  );
}
