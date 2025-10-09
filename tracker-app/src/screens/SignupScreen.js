import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AuthForm
        headerText="Sign Up for Tracker"
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 75,
  },
});

export default SignupScreen;
