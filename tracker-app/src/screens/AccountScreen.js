import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyledButton from '../components/StyledButton';
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.rootTitle}>Your Account</Text>
      </View>
      <Image
        source={require('../../assets/images/location.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <StyledButton title="Sign Out" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 'auto',
  },
  topContainer: {},
  buttonContainer: {
    marginBottom: 40,
  },
  rootTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 6,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default AccountScreen;
