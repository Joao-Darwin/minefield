import React from "react";
import { StyleSheet, View } from "react-native";
import params from "../params";

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    }
})

function Field(): React.JSX.Element {

    const styleField: { [key: string]: any } = [styles.field];

    if (styleField.length === 1) styleField.push(styles.regular);

    return (
        <View style={styleField}>

        </View>
    );
}

export default Field;