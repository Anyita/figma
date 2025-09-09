import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * StatusBar - 状态栏组件
 * 
 * Features:
 * - 显示时间
 * - 显示信号、WiFi、电池图标
 * - 适配不同屏幕尺寸
 */
export interface StatusBarProps {
  time?: string;
  showIcons?: boolean;
}

export function StatusBar({ 
  time = '9:41',
  showIcons = true 
}: StatusBarProps) {
  return (
    <View style={styles.statusBar}>
      <Text style={styles.time}>{time}</Text>
      {showIcons && (
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // 状态栏
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 44,
    backgroundColor: '#F6F6F6',
  },
  time: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalIcon: {
    width: 19,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  wifiIcon: {
    width: 17,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  batteryIcon: {
    width: 27,
    height: 13,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
});
