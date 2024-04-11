import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.App}>
      <Text>Base Project</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
