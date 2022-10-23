import { usePedometer } from "../../hooks/usePedometer"
import { OutputText } from "../utils/OutputText"
import { ToggleButton } from "../utils/ToggleButton"

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

