import React, {useContext, useCallback} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Map from "../components/Map";
import {SafeAreaView} from "react-native-safe-area-context";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import {withNavigationFocus} from "react-navigation";
import TrackForm from "../components/TrackForm";
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording]);

    const [error] = useLocation( isFocused || recording, callback);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Text h3 style={styles.rootTitle}>Create a Track!</Text>
            <Map/>
            {error ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <FontAwesome name='plus' size={20} />
    };
};

const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    rootTitle:{
        alignSelf:'center',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 6,
    }
});

export default withNavigationFocus(TrackCreateScreen);