import { View } from "react-native"
import { useGyroscope } from "../../hooks/useGyroscope"
import { Text } from "react-native-rapi-ui"

export const Gyroscope: React.FC = () => {
    const { data } = useGyroscope()

    return (
        <View>
            <Text fontWeight="bold">X<Text>{ data?.x }</Text></Text>
            <Text fontWeight="bold">Y<Text>{ data?.y }</Text></Text>
            <Text fontWeight="bold">Z<Text>{ data?.z }</Text></Text>
        </View>
    )
}

