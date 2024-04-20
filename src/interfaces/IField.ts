interface IField {
    row: number,
    column: number,
    opened: boolean,
    marked: boolean,
    mined: boolean,
    exploded: boolean,
    nearMines: number
}

export default IField;