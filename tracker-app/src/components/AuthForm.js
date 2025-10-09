import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from '@rneui/themed';
import Spacer from './Spacer';
import StyledButton from './StyledButton';

const AuthForm = ({ headerText, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text style={styles.headerText} h3>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <StyledButton
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default AuthForm;
