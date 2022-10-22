import { View } from "react-native"
import { useDeviceMotion } from "../../hooks/useDeviceMotion"
import { Text } from "react-native-rapi-ui"

export const DeviceMotion: React.FC = () => {
    const { data } = useDeviceMotion()

    return (
        <View>
            <Text fontWeight="bold">Rotacja alpha: <Text>{ data?.interval }</Text></Text>
            <Text fontWeight="bold">Rotacja beta: <Text>{ data?.rotation?.beta }</Text></Text>
            <Text fontWeight="bold">Rotacja gamma: <Text>{ data?.rotation?.gamma }</Text></Text>
        </View>
    )
}

