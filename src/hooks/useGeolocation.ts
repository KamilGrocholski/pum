import * as Location from 'expo-location'
import { LocationObject } from 'expo-location'
import { useEffect, useState } from 'react'

export const useGeolocation = () => {
    const permissionRequest =  async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') throw new Error('No Foreground Permission')
    }

    const [data, setData] = useState<LocationObject | null>(null)

    const [subscription, setSubscription] = useState<ReturnType<typeof Location.watchPositionAsync> | null>(null)

    const _subscribe = () => {
        setSubscription(Location.watchPositionAsync({
            distanceInterval: 2,
            accuracy: Location.Accuracy.High
        }, (locationObject) => {
            setData(locationObject)
        }))
    }

    const _unsubscribe = () => {
        setSubscription(null)
    }

    useEffect(() => {
        _subscribe()
        return () => _unsubscribe()
    }, [])

    return {
        data,
        subscription,
        _subscribe,
        _unsubscribe,
        permissionRequest,
    }
}