import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/locationContext';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);
  let points = [];

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        loadingEnabled
        showsMyLocationButton
        zoomControlEnabled
        zoomingEnabled
        showsUserLocation
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,158,0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: '65%',
  },
  map: {
    flex: 1,
    marginBottom: 20,
  },
});

export default Map;
