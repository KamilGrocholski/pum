import { useGeolocation } from "../../hooks/useGeolocation"
import { OutputText } from "../utils/OutputText"
import { ToggleButton } from "../utils/ToggleButton"

export const Geolocation: React.FC = () => {
    const { data, _subscribe, _unsubscribe } = useGeolocation()

    return (
        <>
            <OutputText 
                label={ 'Dokładność' }
                data={ data?.coords.accuracy}
            />
            <OutputText 
                label={ 'Wysokość' }
                data={ data?.coords.altitude }
            />
            <OutputText 
                label={ 'Kierunek' }
                data={ data?.coords.heading }
            />
            <OutputText 
                label={ 'Wysokość geograficzna' }
                data={ data?.coords.latitude }
            />
            <OutputText 
                label={ 'Szerokość geograczina' }
                data={ data?.coords.longitude }
            />
            <OutputText 
                label={ 'Prędkość' }
                data={ data?.coords.speed }
            />
            <ToggleButton 
                kill={ _unsubscribe }
                init={ _subscribe }
            />
        </>
    )
}

