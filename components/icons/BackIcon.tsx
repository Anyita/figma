import React from 'react';
import { Path, Svg } from 'react-native-svg';

/**
 * BackIcon - 返回图标组件
 * 
 * Features:
 * - 基于SVG的返回箭头图标
 * - 支持自定义大小和颜色
 * - 高质量矢量图形
 */
export interface BackIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export function BackIcon({ 
  width = 24, 
  height = 24, 
  color = '#393939',
  strokeWidth = 1.5 
}: BackIconProps) {
  return (
    <Svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none"
    >
      {/* 返回箭头路径 */}
      <Path 
        d="M10.0711 4.99998L3 12.071L10.0711 19.1421" 
        stroke={color} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 水平线路径 */}
      <Path 
        d="M21 12H3" 
        stroke={color} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
