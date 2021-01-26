import React, {useContext} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from "react-native-maps";

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.find((trck) => trck._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View style={styles.rootContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline
                    strokeWidth={3}
                    coordinates={track.locations.map(location => location.coords)}
                />
            </MapView>
        </View>
    );
};

TrackDetailScreen.navigationOptions = ({navigation}) => {

    const name = navigation.getParam('name');
    return {
        headerTitle: name
    };
};

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height,
    },
    rootContainer:{
        flex: 1,
        backgroundColor: 'white'
    }
});

export default TrackDetailScreen;