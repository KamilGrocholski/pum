import { View } from "react-native"
import { useBarometer } from "../../hooks/useBarometer"
import { OutputText } from "../OutputText"

export const Barometer: React.FC = () => {
    const { data } = useBarometer()

    return (
        <View>
            <OutputText 
                label="Ciśnienie"
                data={ data?.pressure }
            /> 
            <OutputText 
                label="Względna wysokość"
                data={ data?.relativeAltitude }
            /> 
        </View>
    )
}

