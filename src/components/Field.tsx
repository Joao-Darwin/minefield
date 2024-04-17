import React from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "../params";

interface Props {
    mined?: boolean,
    opened?: boolean,
    nearMines?: number
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    }
})

function Field({ mined, opened, nearMines }: Props): React.JSX.Element {

    const styleField: { [key: string]: any } = [styles.field];
    if (opened) styleField.push(styles.opened)
    if (styleField.length === 1) styleField.push(styles.regular);

    let color = "";
    if (nearMines != undefined && nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && (nearMines != undefined && nearMines > 0) ?
                <Text style={[styles.label, { color: color }]}>{nearMines}</Text> : false}
        </View>
    );
}

export default Field;