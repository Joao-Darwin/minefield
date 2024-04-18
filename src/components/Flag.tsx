import React from "react";
import { Image, StyleSheet, View } from "react-native";

const flagImage = require('../assets/flag.png')

interface Props {
    bigger?: boolean
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        width: 20,
        height: 20
    },
    flagBigger: {
        width: 50,
        height: 50
    }
});

function Flag({ bigger }: Props): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Image style={bigger ? styles.flagBigger : styles.flag} source={flagImage} />
        </View>
    )
}

export default Flag;