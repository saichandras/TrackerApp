import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements";
import {NavigationEvents} from "react-navigation";
import {Context as TrackContext} from "../context/TrackContext";
import TouchableScale from 'react-native-touchable-scale';
import {LinearGradient} from "expo-linear-gradient";
import {Context as LocationContext} from "../context/LocationContext";

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);
    const {state: {colors}, changeColors} = useContext(LocationContext);

    return (
        <View style={styles.topContainer}>
            <NavigationEvents onWillFocus={() => {
                fetchTracks();
                changeColors();
            }}/>
            <FlatList
                style={styles.tracksList}
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <ListItem
                            onPress={() => {
                                navigation.navigate('TrackDetail', {_id: item._id, name: item.name})
                            }}
                            containerStyle={styles.listItemStyle}
                            Component={TouchableScale}
                            friction={90}
                            tension={100}
                            activeScale={0.95}
                            linearGradientProps={{
                                colors: [colors.color1, colors.color2],
                                start: {x: 1, y: 0},
                                end: {x: 0.2, y: 0},
                            }}
                            ViewComponent={LinearGradient} // Only if no expo
                        >
                            <ListItem.Content>
                                <ListItem.Title style={styles.title}>
                                    {item.name}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color='black'/>
                        </ListItem>

                    );
                }}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        headerTitle: 'Tracks'
    };
};

const styles = StyleSheet.create({
    topContainer:{
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 17.5,
        fontWeight: 'bold',
        color: 'white'
    },
    SubmitButtonStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 7,
        marginRight: 7,
        borderRadius: 10,
    },
    listItemStyle: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 6
    },
    tracksList:{
        marginTop: 15,
    },
    noTracksContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    noTrackText:{
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
});

export default TrackListScreen;