import { Barometer, BarometerMeasurement } from 'expo-sensors'
import { useState, useEffect } from 'react'

export const useBarometer = () => {
    const permissionRequest = async () => {
        const { status } = await Barometer.requestPermissionsAsync()
        if (status !== 'granted') throw new Error('No Barometer Permission')
    }

    const [data, setData] = useState<BarometerMeasurement | null>(null);

    const [subscription, setSubscription] = useState<ReturnType<typeof Barometer.addListener> | null>(null);

    useEffect(() => {
      _toggle();
    }, []);
  
    useEffect(() => {
      return () => {
        _unsubscribe();
      };
    }, []);
  
    const _toggle = () => {
      if (subscription) {
        _unsubscribe();
      } else {
        _subscribe();
      }
    };
  
    const _subscribe = () => {
      setSubscription(Barometer.addListener(barometerData => {
        setData(barometerData);
      }));
    };
  
    const _unsubscribe = () => {
      subscription && subscription.remove();
      setSubscription(null);
    };

    return {
        permissionRequest,
        _subscribe,
        _unsubscribe,
        data,
        subscription,
        setSubscription
    }
}