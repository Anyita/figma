import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * NotificationBanner - 通知横幅组件
 * 
 * Features:
 * - 显示通知消息
 * - 可关闭功能
 * - 支持不同类型的通知样式
 */
export interface NotificationBannerProps {
  message: string;
  onClose?: () => void;
  type?: 'info' | 'warning' | 'success' | 'error';
  showCloseButton?: boolean;
}

export function NotificationBanner({
  message,
  onClose,
  type = 'warning',
  showCloseButton = true,
}: NotificationBannerProps) {
  const getBorderColor = () => {
    switch (type) {
      case 'success': return '#4CAF50';
      case 'error': return '#F44336';
      case 'info': return '#2196F3';
      case 'warning':
      default: return '#FFD7BF';
    }
  };

  return (
    <View style={[styles.notificationBanner, { borderLeftColor: getBorderColor() }]}>
      <Text style={styles.notificationText}>{message}</Text>
      {showCloseButton && onClose && (
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClose}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Close notification"
          accessibilityHint="Dismisses the notification banner"
        >
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // 通知横幅
  notificationBanner: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    paddingRight: 50, // 为关闭按钮留出空间
    borderLeftWidth: 3,
  },
  notificationText: {
    fontSize: 12,
    color: '#393939',
    opacity: 0.8,
    lineHeight: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '600',
  },
});
