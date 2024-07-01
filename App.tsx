import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CounterComponent from './Components/CounterComponent';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CounterComponent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;