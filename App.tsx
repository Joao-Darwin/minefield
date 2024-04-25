import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import params from './src/utils/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { cloneBoard, createMinedBoard, hadExplosion, openField, showMines, wonGame } from './src/utils/gameLogic';
import IField from './src/interfaces/IField';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  welcome: {
    
  },
  instructions: {

  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

function App(): React.JSX.Element {

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return {
      board: createMinedBoard(cols, rows, minesAmount()),
      won: false,
      lost: false
    }
  }

  const [boardState, setBoardState] = useState<IField[][]>(createState().board);
  const [won, setWon] = useState(createState().won);
  const [lost, setLost] = useState(createState().lost);

  const onOpenField = (row: number, column: number) => {
    const board = cloneBoard(boardState);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('You lost!!', 'You noob');
    }

    if (won) {
      Alert.alert('You winn!!!');
    }

    setBoardState(board);
    setWon(won);
    setLost(lost);
  }

  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <View style={styles.board}>
        <MineField board={boardState} onOpenField={onOpenField} />
      </View>
    </SafeAreaView>
  );
}

export default App;
