import { Magnetometer } from "expo-sensors"
import { useState, useEffect } from "react"

export const useMagnetometer = () => {
    const permissionRequest = async () => {
        const { status } = await Magnetometer.requestPermissionsAsync()
        if (status !== 'granted') throw new Error('No Magnetometer Permission')
    }

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
      const [subscription, setSubscription] = useState<ReturnType<typeof Magnetometer.addListener> | null>(null);
    
      const _slow = () => {
        Magnetometer.setUpdateInterval(1000);
      };
    
      const _fast = () => {
        Magnetometer.setUpdateInterval(16);
      };
    
      const _subscribe = () => {
        setSubscription(
          Magnetometer.addListener(result => {
            setData(result);
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