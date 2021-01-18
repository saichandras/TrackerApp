import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import StyledButton from "../components/StyledButton";

const SignupScreen = ({navigation}) => {
    return (
        <Spacer>
            <View style={styles.headingContainer}>
                <Text h3>Sign Up for Tracker</Text>
            </View>
            <Input label='Email'/>
            <Input label='Password'/>
            <StyledButton title='Sign Up'/>
        </Spacer>
    );
};

SignupScreen.navigationOptions = (props) => {
    return {
        screenOptions: {
            headerShow: false
        }
    }
};

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        margin: 10,
    },
    headingContainer: {
        marginBottom: 25,
        marginTop: 15,
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 5,
    }
});

export default SignupScreen;