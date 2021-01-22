import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context as AuthContext} from "../context/authContext";
import StyledButton from "../components/StyledButton";
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {

    const {state, signout} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style = {styles.topContainer}>
                <Text style={{fontSize: 48}}>
                    Account Screen!
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton title='Sign Out' onPress={signout}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex : 1,
        justifyContent : 'space-between',
        margin: 'auto'
    },
    topContainer:{

    },
    buttonContainer:{
        marginBottom: 40,
    }
});

export default AccountScreen;