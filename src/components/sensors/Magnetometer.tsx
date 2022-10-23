import { useMagnetometer } from "../../hooks/useMagnetometer"
import { OutputText } from "../utils/OutputText"
import { ToggleButton } from "../utils/ToggleButton"

export const Magnetometer: React.FC = () => {
    const { data, _subscribe, _unsubscribe } = useMagnetometer()

    return (
        <>
            <OutputText 
                label="X"
                data={ data?.x }
            /> 
            <OutputText 
                label="Y"
                data={ data?.y }
            /> 
            <OutputText 
                label="Z"
                data={ data?.z }
            />
            <ToggleButton 
                kill={ _unsubscribe }
                init={ _subscribe }
            />
        </>
    )
}

