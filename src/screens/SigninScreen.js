import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from "react-navigation";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/authContext";

const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <Spacer>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign In to your Account!"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign In'
            />
            <NavLink
                text="Don't have an account? Sign up instead!"
                routeName='Signup'
            />
        </Spacer>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({});

export default SigninScreen;