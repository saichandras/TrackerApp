import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording],
  );

  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text h3 style={styles.rootTitle}>
        Create a Track!
      </Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 6,
  },
});

export default TrackCreateScreen;
