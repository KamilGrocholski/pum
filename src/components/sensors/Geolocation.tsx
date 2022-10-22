import { View } from "react-native"
import { useGeolocation } from "../../hooks/useGeolocation"
import { Text } from "react-native-rapi-ui"

export const Geolocation: React.FC = () => {
    const { data } = useGeolocation()
    console.log(data)

    return (
        <View>
            <Text fontWeight="bold">Dokładność<Text>{ data?.coords.accuracy }</Text></Text>
            <Text fontWeight="bold">Wysokość<Text>{ data?.coords.altitude }</Text></Text>
            <Text fontWeight="bold">Dokładność wysokości<Text>{ data?.coords.altitudeAccuracy }</Text></Text>
            <Text fontWeight="bold">Kierunek<Text>{ data?.coords.heading }</Text></Text>
            <Text fontWeight="bold">Wysokość<Text>{ data?.coords.latitude }</Text></Text>
            <Text fontWeight="bold">Szerokość<Text>{ data?.coords.longitude }</Text></Text>
            <Text fontWeight="bold">Prędkość<Text>{ data?.coords.speed }</Text></Text>
        </View>
    )
}

