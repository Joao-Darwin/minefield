import IField from "./interfaces/IField"

export const createMinedBoard = (rows: number, columns: number, minesAmount: number): IField[][] => {
    const board: IField[][] = createBoard(rows, columns);
    spreadMines(board, minesAmount);

    return board;
}

const createBoard = (rows: number, columns: number): IField[][] => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                marked: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board: IField[][], minesAmount: number): void => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    while(minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows + '', 10);
        const columnSel = parseInt(Math.random() * columns + '', 10);

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
}