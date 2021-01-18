import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const StyledButton = (props) => {
    return(
        <View style={styles.buttonContainer}>
            <Button type='solid' raised={true} title={props.title}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 20,
        marginHorizontal: 10,
    }
})

export default StyledButton;
