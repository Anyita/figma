import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface FailedIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export function FailedIcon({ 
  width = 20, 
  height = 20, 
  color = '#BC1215' 
}: FailedIconProps) {
  return (
    <Svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20"
      fill="none"
    >
      <Circle 
        cx="10" 
        cy="10" 
        r="10" 
        fill={color} 
      />
      <Path 
        d="M7.00037 12.6569L12.6572 7" 
        stroke="white" 
        strokeWidth={1.5} 
        strokeLinecap="round"
      />
      <Path 
        d="M7.00037 6.99988L12.6572 12.6567" 
        stroke="white" 
        strokeWidth={1.5} 
        strokeLinecap="round"
      />
    </Svg>
  );
}
