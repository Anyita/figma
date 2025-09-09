import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface WaitIconProps {
  width?: number;
  height?: number;
}

export const WaitIcon: React.FC<WaitIconProps> = ({
  width = 20,
  height = 20,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="10" fill="#313F5B" />
      <Path 
        d="M10 5V11L13.5 14" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};
