import React from "react";
import { View } from "react-native";
import { MainStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Section, SectionContent, Text, themeColor, TopNav, useTheme } from "react-native-rapi-ui";
import { Scanner, BarCodesList } from "../../components/BarCodes";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "BarCodeTabs">) {
  const { isDarkmode, setTheme } = useTheme();

  return (
    <Layout>
      <TopNav
        middleContent="Skaner"
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
        }}
      >
        <Section>
          <SectionContent>
            <Scanner />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}