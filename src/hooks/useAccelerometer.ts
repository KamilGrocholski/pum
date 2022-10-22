import { Accelerometer, ThreeAxisMeasurement } from "expo-sensors"
import { useEffect, useState } from "react"

export const useAccelerometer = () => {
    const permissionRequest = async () => {
        const { status } = await Accelerometer.requestPermissionsAsync()
        if (status !== 'granted') throw new Error('No Accelerometer Permission') 
    } 
    
    const [data, setData] = useState<ThreeAxisMeasurement | null>(null);

    const [subscription, setSubscription] = useState<ReturnType<typeof Accelerometer.addListener> | null>(null);
    
    const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };
    
    const _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };
    
    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
            })
        );
    };
    
    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };
    
    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return {
        permissionRequest,
        _slow,
        _fast,
        _subscribe,
        _unsubscribe,
        data,
        subscription,
        setSubscription
    }
}
