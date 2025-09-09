import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/**
 * NotificationCard - 通知卡片组件
 * 
 * 根据Figma设计实现的通知卡片，包含：
 * - 半透明白色背景和模糊效果
 * - 橙色圆角图标容器
 * - 标题、时间戳和描述文本
 * - 16px圆角和阴影效果
 */

export interface NotificationCardProps {
  /** 通知标题 */
  title?: string;
  /** 时间戳 */
  timestamp?: string;
  /** 描述文本 */
  description?: string;
  /** 图标图片源 */
  iconSource?: any;
}

export function NotificationCard({
  title = 'Additional info needed',
  timestamp = '3m ago',
  description = 'We need a quick document upload to finish your transfer. Upload now to keep things moving.',
  iconSource = require('@/assets/images/notification-logo.png'),
}: NotificationCardProps) {
  return (
    <View style={styles.container}>
      {/* 图标容器 */}
      <View style={styles.iconContainer}>
        <Image 
          source={iconSource} 
          style={styles.icon}
          resizeMode="cover"
        />
      </View>

      {/* 内容区域 */}
      <View style={styles.content}>
        {/* 标题和时间戳 */}
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>

        {/* 描述文本 */}
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 主容器 - 半透明白色背景和模糊效果
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明白色
    borderRadius: 16,
    padding: 9,
    paddingRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%', // 响应式宽度，填充父容器
    // iOS阴影效果
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android阴影效果
    elevation: 4,
  },

  // 橙色图标容器
  iconContainer: {
    width: 38,
    height: 38,
    backgroundColor: '#FF6100', // 橙色背景
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  // 图标样式
  icon: {
    width: 39,
    height: 39,
    marginTop: -0.5, // 微调位置
  },

  // 内容区域
  content: {
    flex: 1,
    gap: 1,
  },

  // 标题和时间戳容器
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  // 标题样式
  title: {
    fontFamily: 'SF UI Display',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18, // 1.193359375em * 15px
    color: '#222222',
  },

  // 时间戳样式
  timestamp: {
    fontFamily: 'SF UI Display',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14, // 1.193359375em * 12px
    color: '#3F3F3F',
    opacity: 0.5,
    letterSpacing: -0.24, // -2% of 12px
  },

  // 描述文本样式
  description: {
    fontFamily: 'SF UI Display',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18, // 1.193359375em * 15px
    color: '#3F3F3F',
    flex: 1, // 响应式宽度，填充剩余空间
  },
});
