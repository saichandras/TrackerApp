import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from "../components/Spacer";
import {Context as AuthContext} from '../context/authContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <Spacer>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign Up'
            />
            <NavLink
                text='Already have an account? Sign in instead!'
                routeName='Signin'
            />
        </Spacer>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
};

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        margin: 10,
    },
});

export default SignupScreen;