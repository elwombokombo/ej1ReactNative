import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

type ButtonType = 'ADD' | 'SUBSTRACT' | 'CLEAR';

interface ButtonComponentProps extends TouchableOpacityProps {
  tipo: ButtonType;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ tipo, onPress, ...props }) => {
  const buttonStyles: Record<ButtonType, { backgroundColor: string }> = {
    ADD: { backgroundColor: 'green' },
    SUBSTRACT: { backgroundColor: 'red' },
    CLEAR: { backgroundColor: 'yellow' },
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles[tipo]]}
      onPress={onPress}>
      <Text style={[styles.buttonText, tipo === 'CLEAR' && styles.clearButtonText]}>
        {tipo}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  clearButtonText: {
    color: 'black',
  },
});

export default ButtonComponent;