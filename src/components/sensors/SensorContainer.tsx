import { View } from "react-native"

interface Props {
    sensorComponent: JSX.Element
}

export const SensorContainer: React.FC<Props> = ({ sensorComponent }) => {

    return (
        <View>
            { sensorComponent }
        </View>
    )
}