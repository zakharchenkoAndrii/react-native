import React, { ReactNode } from 'react';
import { View } from 'react-native';
import style from './style';

interface CenterViewProps {
  children: ReactNode | ReactNode[];
}

export default function CenterView({ children }: CenterViewProps) {
  return <View style={style.main}>{children}</View>;
}
