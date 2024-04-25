import IField from "../interfaces/IField"

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

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows + '', 10);
        const columnSel = parseInt(Math.random() * columns + '', 10);

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
}

export const cloneBoard = (board: IField[][]) => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

export const isSafeNeighborhood = (board: IField[][], row: number, column: number) => {
    const safes = (result: boolean, neighbor: IField) => result && !neighbor.mined;
    return getNeighbors(board, row, column).reduce(safes, true);
}

const getNeighbors = (board: IField[][], row: number, column: number): IField[] => {
    const neighbors: IField[] = [];
    const rows = [row - 1, row, row + 1];
    const columns = [column - 1, column, column + 1];

    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })

    return neighbors;
}

export const openField = (board: IField[][], row: number, column: number): void => {
    const field: IField = board[row][column];

    if (!field.opened) {
        field.opened = true;
        if (field.mined) {
            field.exploded = true;
        } else if (isSafeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column).forEach(f => openField(board, f.row, f.column)); // Recursion
        } else {
            const neighbors = getNeighbors(board, row, column);
            field.nearMines = neighbors.filter(n => n.mined).length;
        }
    }
}

export const wonGame = (board: IField[][]): boolean => {
    return fields(board).filter(pendding).length === 0;
}

const fields = (board: IField[][]): IField[] => {
    let fields: IField[] = [];
    return fields.concat(...board);
}

const pendding = (field: IField): boolean => (field.mined && !field.marked) || (!field.opened && !field.mined);

export const showMines = (board: IField[][]): void => {
    return fields(board).filter(field => field.mined).forEach(field => {
        field.opened = true;
    })
}

export const hadExplosion = (board: IField[][]): boolean => {
    return fields(board).filter(field => field.exploded).length > 0;
}

export const invertFlag = (board: IField[][], row: number, column: number) => {
    const field = board[row][column];
    field.marked = !field.marked;
}