import React from "react";
import { StyleSheet, View } from "react-native";
import IField from "../interfaces/IField";
import Field from "./Field";

interface Props {
    board: IField[][]
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})

function MineField({ board }: Props): React.JSX.Element {
    const rows = board.map((row, index) => {
        const colums = row.map((column, index) => {
            return <Field {...column} key={index}/> 
        })
        return <View style={{flexDirection: 'row'}} key={index}>{colums}</View>
    }) 

    return (
        <View style={styles.container}>{rows}</View>
    )
}

export default MineField;