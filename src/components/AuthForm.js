import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "react-native-elements";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={styles.headingContainer}>
                <Text h3>{headerText}</Text>
            </View>
            <StyledInput
                label='Email'
                value={email}
                onChangeText={setEmail}
                secureTextEntry={false}
            />
            <StyledInput
                label='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            {errorMessage ? <Text style={styles.error}>Something Went Wrong</Text> : null}
            <StyledButton title={submitButtonText} onPress={() => {
                onSubmit({email, password});
            }}/>
        </>
    );

};

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 75,
    },
    headingContainer: {
        marginBottom: 25,
        marginTop: 15,
        alignItems: 'center'
    },
    error:{
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});

export default AuthForm;