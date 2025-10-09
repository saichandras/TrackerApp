import React, { useContext, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailsScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);
  const { _id, name } = route.params;
  const track = state.find((trck) => trck._id === _id);
  const initialCoords = track.locations[0].coords;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name]);

  return (
    <View style={styles.rootContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline
          strokeWidth={3}
          coordinates={track.locations.map((location) => location.coords)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TrackDetailsScreen;
