import React from "react";
import { StyleSheet, View } from "react-native";
import IField from "../interfaces/IField";
import Field from "./Field";

interface Props {
    board: IField[][],
    onOpenField: ((row: number, column: number) => void)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})

function MineField({ board, onOpenField }: Props): React.JSX.Element {
    const rows = board.map((row, indexRow) => {
        const colums = row.map((column, indexColumn) => {
            return <Field {...column} key={indexColumn} onOpen={() => onOpenField(indexRow, indexColumn)}/> 
        })
        return <View style={{flexDirection: 'row'}} key={indexRow}>{colums}</View>
    }) 

    return (
        <View style={styles.container}>{rows}</View>
    )
}

export default MineField;