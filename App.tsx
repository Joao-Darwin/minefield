import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/gameLogic';
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
      board: createMinedBoard(cols, rows, minesAmount())
    }
  }

  const [boardState, setBoardState] = useState<IField[][]>(createState().board);

  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <View style={styles.board}>
        <MineField board={boardState} />
      </View>
    </SafeAreaView>
  );
}

export default App;
