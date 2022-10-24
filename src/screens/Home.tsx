import React from "react";
import { View, Linking } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Strona główna"
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
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Button
              style={{ marginTop: 10 }}
              text="Czytnik kodów"
              status="info"
              onPress={() => {
                navigation.navigate('BarCodeTabs')
              }}
            />
            <Button
              text="Sensory"
              onPress={() => {
                navigation.navigate("Sensory");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Wyloguj"
              onPress={async () => {
                const { error } = await supabase.auth.signOut();
                if (!error) {
                  alert("Wylogowano!");
                }
                if (error) {
                  alert(error.message);
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
