import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { CustomTabBar, TabItem } from '@/components/CustomTabBar';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // 定义tab配置，根据第二张图的设计
  const tabItems: TabItem[] = [
    {
      name: 'home',
      title: 'Home',
      icon: 'house.fill',
    },
    {
      name: 'recipients',
      title: 'Recipients',
      icon: 'person.2.fill',
    },
    {
      name: 'send-money',
      title: 'Send Money',
      icon: 'paperplane.fill',
      isSpecial: true, // 特殊按钮，有橙色圆形背景
    },
    {
      name: 'track',
      title: 'Track',
      icon: 'arrow.left.arrow.right',
    },
    {
      name: 'locations',
      title: 'Locations',
      icon: 'mappin.and.ellipse',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // 隐藏默认tab bar
        }}
        initialRouteName="home">
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
          }}
        />
        <Tabs.Screen
          name="recipients"
          options={{
            title: 'Recipients',
          }}
        />
        <Tabs.Screen
          name="send-money"
          options={{
            title: 'Send Money',
          }}
        />
        <Tabs.Screen
          name="track"
          options={{
            title: 'Track',
          }}
        />
        <Tabs.Screen
          name="locations"
          options={{
            title: 'Locations',
          }}
        />
        <Tabs.Screen
          name="transfer-summary"
          options={{
            href: null, // Hide from tab bar
          }}
        />
        <Tabs.Screen
          name="order-confirm"
          options={{
            href: null, // Hide from tab bar
          }}
        />
        <Tabs.Screen
          name="transfer-detail"
          options={{
            href: null, // Hide from tab bar
          }}
        />
      </Tabs>
      
      {/* 自定义Tab Bar */}
      <CustomTabBar tabs={tabItems} />
    </View>
  );
}
