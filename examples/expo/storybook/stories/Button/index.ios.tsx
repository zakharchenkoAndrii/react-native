import React from 'react';
import { TouchableHighlight } from 'react-native';
import { ButtonProps } from './types';

export default function Button({ onPress, children }: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};
