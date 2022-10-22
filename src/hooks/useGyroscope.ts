import { Gyroscope } from "expo-sensors";
import { useState, useEffect } from "react";

export const useGyroscope = () => {
    const permissionRequest = async () => {
        const { status } = await Gyroscope.requestPermissionsAsync()
        if (status !== 'granted') throw new Error('No Gyroscope Permission')
    }

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [subscription, setSubscription] = useState<ReturnType<typeof Gyroscope.addListener> | null>(null);
    
    const _slow = () => {
        Gyroscope.setUpdateInterval(1000);
    };
    
    const _fast = () => {
        Gyroscope.setUpdateInterval(16);
    };
    
    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
                setData(gyroscopeData);
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
        _subscribe,
        _unsubscribe,
        data,
        subscription,
        setSubscription,
        _fast,
        _slow
    }
}