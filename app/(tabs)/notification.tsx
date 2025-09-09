import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NotificationCard } from '../../components/NotificationCard';

/**
 * NotificationScreen - 应用启动页面（默认页面）
 * 
 * Features:
 * - 全屏背景图片显示
 * - 居中显示通知卡片
 * - 点击通知卡片跳转到Home页面
 * - 无底部导航栏
 * - 响应式设计适配不同屏幕尺寸
 */
export default function NotificationScreen() {
  const router = useRouter();

  const handleCardPress = () => {
    console.log('Notification card pressed - navigating to home');
    router.replace('/(tabs)/home' as any);
  };

  return (
    <View style={styles.container}>
      {/* 背景图片 */}
      <Image
        source={require('@/assets/temp/notification_bg.png')}
        style={styles.backgroundImage}
        transition={200}
        cachePolicy="memory-disk"
        // Accessibility: Describe the image for screen readers
        accessibilityLabel="Notification background image"
        accessibilityRole="image"
      />
      
      {/* 通知卡片 - 可点击跳转到Home页面 */}
      <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
        <NotificationCard 
          title="Additional info needed"
          timestamp="3m ago"
          description="We need a quick document upload to finish your transfer. Upload now to keep things moving."
        />
      </TouchableOpacity>
    </View>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Main container - fills entire screen
  container: {
    flex: 1,
    backgroundColor: '#000000', // Black background as fallback
    position: 'relative',
  },
  
  // Background image styling
  backgroundImage: {
    width: '100%', // 100% width as requested
    flex: 1, // Take up all available height
    resizeMode: 'contain', // Maintain aspect ratio and fit within bounds
  },
  
  // 卡片容器 - 距离屏幕顶部320px，左右间距16px
  cardContainer: {
    position: 'absolute',
    top: 330, // 距离屏幕顶部330px
    left: 16, // 左边距16px
    right: 16, // 右边距16px
    zIndex: 1, // 确保在背景图片之上
  },
});

