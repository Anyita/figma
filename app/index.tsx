import { NotificationCard } from '@/components/NotificationCard';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

/**
 * IndexScreen - 应用主页（启动页面）
 * 
 * Features:
 * - 全屏背景图片显示
 * - 通知卡片组件居中显示
 * - 点击卡片跳转到主应用页面
 * - 无底部导航栏
 */
export default function IndexScreen() {
  const router = useRouter();

  const handleCardPress = () => {
    // 跳转到主应用的tabs页面
    router.push('/(tabs)/' as any);
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
      
      {/* 通知卡片 - 放置在指定位置，可点击跳转 */}
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
  
  // 卡片容器 - 距离屏幕顶部330px，左右各16px间距
  cardContainer: {
    position: 'absolute',
    top: 330, // 距离屏幕顶部330px
    left: 16, // 左边距16px
    right: 16, // 右边距16px
    zIndex: 1, // 确保在背景图片之上
  },
});
