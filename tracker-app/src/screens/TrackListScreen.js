import { useFocusEffect } from '@react-navigation/native';
import { ListItem, Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableScale from 'react-native-touchable-scale';
import { getColorsForName } from '../Functions/ColorsGenerator';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(
    useCallback(() => {
      fetchTracks();
    }, []),
  );

  return (
    <>
      {state.length > 0 ? (
        <SafeAreaView style={styles.topContainer}>
          <FlatList
            style={styles.tracksList}
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <ListItem
                  onPress={() => {
                    navigation.navigate('TrackDetails', {
                      _id: item._id,
                      name: item.name,
                    });
                  }}
                  containerStyle={styles.listItemStyle}
                  Component={TouchableScale}
                  friction={90}
                  tension={100}
                  activeScale={0.95}
                  linearGradientProps={{
                    colors: getColorsForName(item.name),
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                >
                  <ListItem.Content>
                    <ListItem.Title style={styles.title}>
                      {item.name}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color="black" />
                </ListItem>
              );
            }}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.noTracksContainer}>
          <Text h3 style={styles.noTrackText}>
            No tracks yet
          </Text>
          <Text style={styles.noTrackSubtext}>
            You haven't recorded any tracks. Start by creating your first track.
          </Text>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: 'white',
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
    marginVertical: 6,
  },
  tracksList: {
    marginTop: 15,
  },
  noTracksContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  noTrackText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noTracks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noTracksContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  noTrackSubtext: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default TrackListScreen;
