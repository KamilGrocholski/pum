import { Pedometer } from 'expo-sensors'
import { PedometerResult } from 'expo-sensors/build/Pedometer'
import { useEffect, useState } from 'react'

export const usePedometer = () => {
    const permissionRequest = async () => {
        const { status } = await Pedometer.requestPermissionsAsync()
        console.log(status)
        if (status !== 'granted') throw new Error('No Pedometer Permission')
    }

    const [data, setData] = useState<PedometerResult>({ steps: 0 })

    const [subscription, setSubscription] = useState<ReturnType<typeof Pedometer.watchStepCount> | null>(null)
    
    const _subscribe = async () => {
        await permissionRequest()
        setSubscription(Pedometer.watchStepCount(result => {
          setData(prev => ({
            steps: prev.steps + result.steps
          }))
        }))
      };
    
      const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };

      useEffect(() => {
        _subscribe()
        return () => _unsubscribe()
      }, [])

    return {
        data,
        _unsubscribe,
        _subscribe,
        subscription,
        setSubscription,
        permissionRequest
    }
}