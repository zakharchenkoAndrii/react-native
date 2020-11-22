import React from 'react';
import { ButtonProps } from './types';

export default ({ children, onPress }: ButtonProps) => (
  <button onClick={onPress} type="button">
    {children}
  </button>
);
