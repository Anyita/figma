import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface DoneIconProps {
  width?: number;
  height?: number;
}

export const DoneIcon: React.FC<DoneIconProps> = ({
  width = 20,
  height = 20,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="10" fill="#313F5B" />
      <Path 
        d="M14.1315 7.86828L8.92124 13.0785L6.31611 10.4734" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};
