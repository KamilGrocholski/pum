import { usePedometer } from "../../hooks/usePedometer"
import { OutputText } from "../OutputText"
import { ToggleButton } from "../ToggleButton"

export const Pedometer: React.FC = () => {
    const { data, _subscribe, _unsubscribe } = usePedometer()

    return (
        <>
            <OutputText 
                label={ 'Ilość kroków' }
                data={ data?.steps }
                n={ 0 }
            />
            <ToggleButton 
                kill={ _unsubscribe }
                init ={ _subscribe }
            />
        </>
    )
}

