import { View } from "react-native"
import { Button } from "react-native-rapi-ui"
import { useAudio } from "../../hooks/useAudio"

export const Recorder: React.FC = () => {
    const {
        startPlayingSound,
        stopPlayingSound,
        startRecording,
        stopRecording,
        isRecording,
        isSoundPlaying,
        sound
    } = useAudio()

    return (
        <View>
            {isRecording ? 
            <>
                <Button 
                    text={ 'Stop' }
                    onPress={ stopRecording }
                    status={ 'danger' }
                />
            </>: 
            <>
                <Button 
                    text={ 'Start' }
                    onPress={ startRecording }
                    status={ 'success' }
                />
                <Button 
                    style={{ marginTop: 20 }}
                    text={ 'Odtwórz' }
                    onPress={ startPlayingSound }
                    status={ 'primary' }
                />
            </>}
        </View>
    )
}