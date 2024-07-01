import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from './Button';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = (operation: 'ADD' | 'SUBSTRACT' | 'CLEAR') => {
    switch (operation) {
      case 'ADD':
        setCount(count + 1);
        break;
      case 'SUBSTRACT':
        setCount(count - 1);
        break;
      case 'CLEAR':
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent tipo="ADD" onPress={() => handleClick('ADD')} />
        <ButtonComponent tipo="SUBSTRACT" onPress={() => handleClick('SUBSTRACT')} />
        <ButtonComponent tipo="CLEAR" onPress={() => handleClick('CLEAR')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default CounterComponent;