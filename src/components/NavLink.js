import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import {Text} from "react-native-elements";


const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity style={styles.signInLink} onPress={() => {navigation.navigate(routeName)}}>
            <Text style={styles.signInText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    signInLink:{
        marginTop: 15,
        alignSelf: 'center',
    },
    signInText:{
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 14.7,
    }
});

export default withNavigation(NavLink);