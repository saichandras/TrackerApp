import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const StyledButton = ({ title, onPress, disabled = false }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        type="solid"
        raised={true}
        title={title}
        onPress={onPress}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default StyledButton;
