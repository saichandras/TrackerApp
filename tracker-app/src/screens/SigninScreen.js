import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AuthForm
        headerText="Sign In for Tracker"
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account, sign up instead."
        routeName="Signup"
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
export default SigninScreen;
