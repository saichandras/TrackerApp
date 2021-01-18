import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = (props) => {
    return (
        <View style={styles.rootContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    }
});

export default Spacer;