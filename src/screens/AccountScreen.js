import React, {useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Context as AuthContext} from "../context/authContext";
import StyledButton from "../components/StyledButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from "@expo/vector-icons";

const AccountScreen = () => {

    const {state, signout} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style = {styles.topContainer}>
                <Text style={styles.rootTitle}>
                    Accounts Screen
                </Text>
            </View>
            <Image source={require("../Images/location.png")} style={styles.image}/>
            <View style={styles.buttonContainer}>
                <StyledButton title='Sign Out' onPress={signout}/>
            </View>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: <FontAwesome name='gear' size={20} />
    };
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
    },
    rootTitle:{
        alignSelf:'center',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 6,
        fontWeight: 'bold'
    },
    image:{
        width: 200,
        height: 200,
        alignSelf:'center'
    }
});

export default AccountScreen;