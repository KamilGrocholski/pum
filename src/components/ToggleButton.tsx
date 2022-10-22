import { useState } from "react"
import { Button } from "react-native-rapi-ui"

interface Props {
    kill: () => void
    init: () => void
}

export const ToggleButton: React.FC<Props> = ({ kill, init }) => {
    const [isFirstUse, setIsFirstUse] = useState<boolean>(true)
    const [isWorking, toggleIsWorking] = useState<boolean>(true)

    const handleToggle = () => {
        if (isFirstUse) {
            kill()
            toggleIsWorking(false)
            setIsFirstUse(false)
            return 
        }
        if (!isFirstUse && isWorking) {
            toggleIsWorking(false)
            kill()
            return 
        }  
        if (!isFirstUse && !isWorking) {
            toggleIsWorking(true)  
            init()
            return 
        }
    }

    return (
        <>
            <Button 
                onPress={ handleToggle }
                status={ isWorking ? 'danger' : 'success' }
                text={ isWorking ? 'Stop' : 'Start' }
                style={{
                    marginTop: 20,
                    minWidth: '100%'
                }}
            />
        </>
    )
}