import { Pedometer } from 'expo-sensors'
import { useEffect, useState } from 'react'

export const usePedometer = () => {
    const permissionRequest = async () => {
        const { status } = await Pedometer.requestPermissionsAsync()
        if (status !== 'granted') throw new Error('No Pedometer Permission')
    }

    const [data, setData] = useState<{
        pastStepCount: number | string
        currentStepCount: number | string
    }>({
        pastStepCount: 0,
        currentStepCount: 0
    })

    const [subscription, setSubscription] = useState<ReturnType<typeof Pedometer.watchStepCount> | null>(null)

      useEffect(() => {
        _subscribe()
        return () => _unsubscribe()
      }, [])
    
    
      const _subscribe = () => {
        setSubscription(Pedometer.watchStepCount(result => {
          setData(prev => ({
            ...prev,
            currentStepCount: result.steps,
          }));
        }));
    
    
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(start, end).then(
          result => {
            setData(prev => ({ 
                ...prev, pastStepCount: result.steps 
            }));
          },
          error => {
            setData(prev => ({
                ...prev,
                pastStepCount: 'Could not get stepCount: ' + error,
            }));
          }
        );
      };
    
      const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };

    return {
        data,
        _unsubscribe,
        _subscribe,
        subscription,
        setSubscription,
        permissionRequest
    }
}