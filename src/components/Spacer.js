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
        marginHorizontal: 10,
        marginBottom: 75,
    }
});

export default Spacer;