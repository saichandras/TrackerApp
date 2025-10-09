import React, { useContext } from 'react';
import { Input, Button } from '@rneui/themed';
import StyledButton from './StyledButton';
import { View, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Toast from 'react-native-toast-message';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.rootContainer}>
      <Input
        placeholder="Enter track name to start recording"
        value={name}
        onChangeText={changeName}
      />
      {recording ? (
        <StyledButton title="Stop" onPress={stopRecording} />
      ) : (
        <StyledButton
          title="Start Recording"
          disabled={!name ? true : false}
          onPress={() => {
            if (name.trim() === '') {
              return Toast.show({
                type: 'warning',
                text1: 'Track Name',
                text1: 'Please Enter Track Name',
              });
            }
            startRecording();
          }}
        />
      )}
      {!recording && locations.length ? (
        <StyledButton title="Save" onPress={saveTrack} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
  },
});

export default TrackForm;
