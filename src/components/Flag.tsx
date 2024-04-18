import React from "react";
import { Image, StyleSheet, View } from "react-native";

const flagImage = require('../assets/flag.png')

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        width: 20,
        height: 20
    }
});

function Flag(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Image style={styles.flag} source={flagImage} />
        </View>
    )
}

export default Flag;