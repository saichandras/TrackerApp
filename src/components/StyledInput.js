import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const StyledInput = (props) => {
    return(
        <Input
            label={props.label}
            value = {props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            inputStyle={styles.inputContentStyle}
            autoCapitalize='none'
            autoCorrect={false}
        />
    );
};


const styles = StyleSheet.create({
    inputContentStyle:{
        fontWeight: 'bold'
    }
});

export default StyledInput;