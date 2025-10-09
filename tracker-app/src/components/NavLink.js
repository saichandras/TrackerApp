import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.signInLink}
      onPress={() => navigation.navigate(routeName)}
    >
      <Text style={styles.signInText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInLink: {
    marginTop: 15,
    alignSelf: 'center',
  },
  signInText: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 14.7,
  },
});

export default NavLink; // No need to wrap with withNavigation anymore
