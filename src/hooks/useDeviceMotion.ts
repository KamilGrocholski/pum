import { DeviceMotion, DeviceMotionMeasurement } from "expo-sensors";
import { useEffect, useState } from "react";

export const useDeviceMotion = () => {
    const [data, setData] = useState<DeviceMotionMeasurement | null>(null)

    const [subscription, setSubscription] = useState<ReturnType<typeof DeviceMotion.addListener> | null>(null)

    const _subscribe = () => {
        setSubscription(
            DeviceMotion.addListener(payload => {
                setData(payload)
            })
        )
    }

    const _unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }

    useEffect(() => {
        _subscribe()
        return () => {
            _unsubscribe()
        }
    }, [])

    return {
        data,
        subscription,
        _subscribe,
        _unsubscribe
    }
}