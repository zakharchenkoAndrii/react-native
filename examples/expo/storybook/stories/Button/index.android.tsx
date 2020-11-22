import React, { ReactNode } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { ButtonProps } from './types';

export default function Button({ onPress, children }: ButtonProps) {
  return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};
