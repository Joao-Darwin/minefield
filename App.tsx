import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {

  },
  instructions: {
    
  }
});

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened={true}/>
      <Field opened={true} nearMines={1}/>
      <Field opened={true} nearMines={2}/>
      <Field opened={true} nearMines={6}/>
    </SafeAreaView>
  );
}

export default App;
