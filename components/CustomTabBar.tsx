import { IconSymbol } from '@/components/ui/IconSymbol';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

/**
 * TabItem - 单个tab项的数据结构
 */
export interface TabItem {
  name: string;
  title: string;
  icon: string;
  isSpecial?: boolean; // 是否为特殊按钮（如Send Money）
}

/**
 * CustomTabBarProps - CustomTabBar组件的属性
 */
export interface CustomTabBarProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabPress?: (tabName: string) => void;
}

/**
 * CustomTabBar - 自定义底部导航栏组件
 * 
 * 特性：
 * - 支持5个导航项
 * - 特殊按钮支持（如Send Money的橙色圆形背景）
 * - 响应式设计
 * - 主题支持
 * - 可自定义图标和标题
 */
export function CustomTabBar({ tabs, activeTab, onTabPress }: CustomTabBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  /**
   * 处理tab点击事件
   */
  const handleTabPress = (tabName: string) => {
    if (onTabPress) {
      onTabPress(tabName);
    } else {
      // 默认导航行为
      try {
        if (tabName === 'index') {
          router.push('/' as any);
        } else {
          router.push(`/${tabName}` as any);
        }
      } catch (error) {
        console.error('Navigation error:', error);
        // 备用导航方法
        router.push('/(tabs)/' as any);
      }
    }
  };

  /**
   * 检查tab是否为当前激活状态
   */
  const isActive = (tabName: string) => {
    if (activeTab) {
      return activeTab === tabName;
    }
    // 默认激活Home页面
    if (pathname === '/(tabs)' || pathname === '/(tabs)/' || pathname.includes('home') || pathname === '/(tabs)/home') {
      return tabName === 'home';
    }
    // Send Money始终显示为激活状态（根据第二张图）
    if (tabName === 'send-money') {
      return true;
    }
    return pathname.includes(tabName);
  };

  // 如果是Send Money页面，隐藏tab bar
  if (pathname.includes('send-money') || pathname.includes('transfer-summary') || pathname.includes('order-confirm') || pathname.includes('transfer-detail')) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* 分割线 */}
      <View style={styles.divider} />
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabItem,
              tab.isSpecial && styles.specialTabItem,
              isActive(tab.name) && tab.isSpecial && styles.activeSpecialTab,
            ]}
            onPress={() => handleTabPress(tab.name)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={tab.title}
          >
            {/* 图标容器 */}
            <View
              style={[
                styles.iconContainer,
                tab.isSpecial && styles.specialIconContainer,
                isActive(tab.name) && tab.isSpecial && styles.activeSpecialIconContainer,
              ]}
            >
              <IconSymbol
                name={tab.icon as any}
                size={tab.isSpecial ? 24 : 22} // FAB按钮内的图标稍微放大
                color={
                  tab.isSpecial
                    ? '#000000' // FAB按钮内的图标改为黑色
                    : isActive(tab.name)
                    ? '#000000' // 激活的普通tab图标为黑色
                    : '#999999' // 未激活的普通tab图标为浅灰色
                }
                style={tab.isSpecial ? { transform: [{ rotate: '-45deg' }] } : undefined} // FAB按钮内的图标向左旋转45度
              />
            </View>
            
            {/* 标题文本 */}
            <Text
              style={[
                styles.tabTitle,
                tab.isSpecial && styles.specialTabTitle,
                isActive(tab.name) && !tab.isSpecial && styles.activeTabTitle,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 主容器
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8F8F8', // 浅灰色背景，与第二张图一致
    paddingBottom: 34, // 为底部安全区域留出空间
  },

  // 分割线
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },

  // Tab栏容器
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // 使用space-evenly，确保均匀分布
    alignItems: 'flex-end', // 改为底部对齐，为FAB按钮留出空间
    paddingHorizontal: 12, // 进一步减少水平内边距
    paddingVertical: 12, // 调整垂直内边距
    height: 65, // 调整高度到65px
  },

  // 普通tab项
  tabItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 6, // 调整内边距
    paddingHorizontal: 12, // 增加水平内边距，提供更多空间
    position: 'relative',
    minWidth: 50, // 设置最小宽度
  },

  // 特殊tab项（Send Money FAB）
  specialTabItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 6, // 调整内边距
    paddingHorizontal: 12, // 增加水平内边距，提供更多空间
    position: 'relative',
    minWidth: 50, // 设置最小宽度
  },

  // 激活的特殊tab
  activeSpecialTab: {
    // 激活状态的特殊样式
  },

  // 图标容器
  iconContainer: {
    width: 26, // 调整图标尺寸
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4, // 调整底部边距
  },

  // 特殊图标容器（Send Money FAB）
  specialIconContainer: {
    width: 52, // 调整FAB尺寸
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FF6E13', // 使用指定的橙色
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4, // 调整底部边距
    // FAB效果：向上突出
    marginTop: -7, // 调整向上突出效果
    // 无阴影效果
  },

  // 激活的特殊图标容器
  activeSpecialIconContainer: {
    backgroundColor: '#FF6E13', // 保持橙色背景
  },

  // Tab标题
  tabTitle: {
    fontSize: 11, // 调整字体大小
    fontWeight: '500',
    color: '#999999', // 未激活状态为浅灰色
    textAlign: 'center',
  },

  // 特殊tab标题
  specialTabTitle: {
    fontSize: 11, // 调整字体大小
    fontWeight: '500',
    color: '#999999', // FAB按钮的文字也为浅灰色
    textAlign: 'center',
  },

  // 激活的tab标题
  activeTabTitle: {
    color: '#000000', // 激活状态为黑色
    fontWeight: '600', // 激活状态加粗
  },
});
