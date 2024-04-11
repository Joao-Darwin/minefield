import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import params from './src/params';

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
    </SafeAreaView>
  );
}

export default App;
