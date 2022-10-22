import { useAccelerometer } from "../../hooks/useAccelerometer"
import { ToggleButton } from "../ToggleButton"
import { OutputText } from "../OutputText"

export const Accelerometer: React.FC = () => {
    const { data, _subscribe, _unsubscribe } = useAccelerometer()

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

