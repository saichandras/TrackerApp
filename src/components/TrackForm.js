import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import StyledButton from "./StyledButton";
import {View, StyleSheet} from "react-native";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";
import {showMessage} from "react-native-flash-message";

const TrackForm = () => {
    const {state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <View style={styles.rootContainer}>
            <Input placeholder='Enter Track Name' value={name} onChangeText={changeName}/>
            {recording ?
                <StyledButton title='Stop' onPress={stopRecording}/> :
                <StyledButton title='Start Recording' onPress={() => {
                    if(name.trim() === ''){
                        return showMessage({
                            icon: 'auto',
                            message: "Please Enter Track Name",
                            type: "warning",
                        });
                    }
                    startRecording();
                }}/>
            }
            {
                !recording && locations.length ?
                    (<StyledButton title='Save' onPress= {saveTrack}/>) :
                    null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 20,
    }
})

export default TrackForm;