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
import { Accelerometer, Barometer, Gyroscope, Magnetometer, Pedometer, Geolocation, DeviceMotion, SensorContainer } from "../components/sensors";

const sensors = {
  geolocation: {
    icon: <Ionicons name='location' size={ 48 } />,
    name: 'Geolokalizacja',
    component: <Geolocation />,
  },
  acceletometer: {
    icon: <Ionicons name='speedometer' size={ 48 } />,
    name: 'Akcelerometr',
    component: <Accelerometer />,
  },
  barometer: {
    icon: <MaterialIcons name='compress' size={ 48 } />,
    name: 'Barometr',
    component: <Barometer />,
  },
  gyroscope: {
    icon: <Fontisto name='spinner-fidget' size={ 48 } />,
    name: 'Żyroskop',
    component: <Gyroscope />,
  },
  magnetometer: {
    icon: <Ionicons name='magnet' size={ 48 } />,
    name: 'Magnetomierz',
    component: <Magnetometer />,
  },
  pedometer: {
    icon: <MaterialIcons name='directions-walk' size={ 48 } />,
    name: 'Krokomierz',
    component: <Pedometer />,
  },
  deviceMotion: {
    icon: <MaterialIcons name='directions-walk' size={ 48 } />,
    name: 'Ruch urządzenia',
    component: <DeviceMotion />
  },
} as const

type Sensor = keyof typeof sensors

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Sensory">) {

  const [sensor, setSensor] = useState<Sensor | null>(null)

  const handleSetSensor = (sensor: Sensor) => {
    setSensor(sensor)
  }

  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Sensory"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => {
          sensor 
            ? setSensor(null)
            : navigation.goBack()
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
        {!sensor &&
          Object.entries(sensors).map(([sensor, obj], i) => {
            const sen = obj as unknown as { icon: JSX.Element, name: string }

            return (<FeatureButton
              key={ i }
              icon={ sen.icon }
              text={ sen.name }
              action={ () => handleSetSensor(sensor as keyof typeof sensors) }
            />
        )})}
        {sensor && sensors[sensor] &&
          <SensorContainer 
              sensorComponent={ sensors[sensor].component }
              icon={ sensors[sensor].icon }
          />
        }
      </View>
    </Layout>
  );
}

const button = {
  width: 100,
  color: themeColor.dark100
}