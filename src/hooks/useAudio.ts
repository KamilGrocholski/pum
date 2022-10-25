import { useEffect, useState } from "react"
import { Audio } from 'expo-av'

export const useAudio = () => {
    const [permissionStatus, requestPermission] = Audio.usePermissions()

    const [sound, setSound] = useState<Audio.Sound | null>(null)
    const [soundError, setSoundError] = useState<string | null>(null)
    const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false)
    
    const [record, setRecord] = useState<Audio.Recording | null>(null)
    const [recordingError, setRecordingError] = useState<string | null>(null)
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [uri, setUri] = useState<string | null>(null)


    const startPlayingSound = async () => {
        try {
            if (!uri || isRecording) return
            const sound = new Audio.Sound()
            setSound(sound)
            await sound.loadAsync({ uri })
            await sound.playAsync()
            setIsSoundPlaying(true)
        } catch (err) {
            setSoundError('Błąd podczas próby odtworzenia dźwięku')
        }
    }

    const stopPlayingSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync()
                setIsSoundPlaying(false)
            }
        } catch (err) {
            setSoundError('Nie udało się zatrzymać odtwarzania dźwięku')
        }
    }

    const startRecording = async () => {
        try {
            const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
            setRecord(recording)
            setIsRecording(true)
        } catch (err) {
            setRecordingError('Błąd podczas próby rozpoczęcia nagrywania')
        }
    }

    const stopRecording = async () => {
        try {
            if (isRecording && record) {
                await record.stopAndUnloadAsync()
                setIsRecording(false)
                setUri(record.getURI())
            }
        } catch (err) {
            setRecordingError('Nie udało się zatrzymać nagrywania dźwięku')
        }
    }

    useEffect(() => {
        (async () => await requestPermission())
        if (!sound) return 
        return () => {
            (async () => await sound.unloadAsync())
        }
    }, [])

    return {
        soundError,
        permissionStatus,
        startPlayingSound,
        stopPlayingSound,
        recordingError,
        startRecording,
        stopRecording,
        isRecording,
        isSoundPlaying,
        sound
    }
}