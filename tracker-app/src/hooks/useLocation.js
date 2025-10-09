import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        // New method to request permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Location permission not granted');
        }

        subscriber = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback,
        );
      } catch (err) {
        setError(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [error];
};
