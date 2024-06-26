import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import params from "../utils/params";
import Flag from "./Flag";
import Mine from "./Mine";

interface Props {
    mined?: boolean,
    opened?: boolean,
    nearMines?: number,
    exploded?: boolean,
    marked?: boolean,
    onOpen: ((event: GestureResponderEvent) => void) | undefined
    onSelect: ((event: GestureResponderEvent) => void) | undefined
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
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    marked: {

    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    }
})

function Field({ mined, opened, nearMines, exploded, marked, onOpen, onSelect }: Props): React.JSX.Element {

    const styleField: { [key: string]: any } = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (marked) styleField.push(styles.marked);
    if (!opened && !exploded) styleField.push(styles.regular);

    let color = "";
    if (nearMines != undefined && nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
            <View style={styleField}>
                {!mined && opened && (nearMines != undefined && nearMines > 0) ?
                    <Text style={[styles.label, { color: color }]}>{nearMines}</Text> : false}
                {mined && opened ? <Mine /> : false}
                {marked && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Field;