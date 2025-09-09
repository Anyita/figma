import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 导入封装的组件
import { CurrencyConverter } from '@/components/CurrencyConverter';
import { NotificationBanner } from '@/components/NotificationBanner';
import { ProfileSection } from '@/components/ProfileSection';
import { RecipientCard } from '@/components/RecipientCard';
import { StatusBar } from '@/components/StatusBar';
import { TransferCard } from '@/components/TransferCard';

/**
 * HomeScreen - 主页面
 * 
 * 根据Figma设计实现的Home页面，包含：
 * - 状态栏
 * - 货币转换器
 * - 最近转账列表
 * - 最近收款人列表
 * - 通知横幅
 */
export default function HomeScreen() {
  const pathname = usePathname();
  const router = useRouter();
  console.log('HomeScreen pathname:', pathname);
  
  // 状态管理：控制通知横幅的显示/隐藏
  const [showNotification, setShowNotification] = useState(true);

  // 处理通知关闭按钮点击
  const handleCloseNotification = () => {
    console.log('Closing notification banner');
    setShowNotification(false);
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 状态栏 */}
        <StatusBar time="9:41" showIcons={true} />

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 用户头像和操作按钮 */}
        <ProfileSection 
          onReferPress={() => console.log('Refer button pressed')}
          onHelpPress={() => console.log('Help button pressed')}
        />

        {/* 货币转换器 */}
        <CurrencyConverter 
          fromAmount="1"
          fromCurrency="USD"
          toAmount="7.0010"
          toCurrency="CNY"
          onInfoPress={() => console.log('Currency info pressed')}
          onSwapPress={() => console.log('Currency swap pressed')}
        />

        {/* 通知横幅 - 条件渲染 */}
        {showNotification && (
          <NotificationBanner 
            message="We're noticed your recent transfer is taking longer than expected. We're working on it! Thank you for your patience! Tap 'Ask for Help' if you need support."
            onClose={handleCloseNotification}
            type="warning"
            showCloseButton={true}
          />
        )}

        {/* 最近转账 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>RECENT TRANSFERS</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          
          <TransferCard 
            recipientName="Grace Wong"
            amount="10"
            currency="USD"
            status="Under review"
            date="Sep 2"
            onPress={() => {
              console.log('Transfer card clicked - navigating to transfer-detail');
              router.push({
                pathname: '/transfer-detail',
                params: { transferStatus: 'under-review' }
              } as any);
            }}
            onSharePress={() => console.log('Share button pressed')}
            showShareButton={true}
          />

          <View style={{ marginTop: 16 }}>
            <TransferCard 
              recipientName="Grace Wong"
              amount="10"
              currency="USD"
              status="More documents required"
              date="Sep 2"
              onPress={() => {
                console.log('Documents required transfer card clicked');
                router.push({
                  pathname: '/transfer-detail',
                  params: { transferStatus: 'documents-required' }
                } as any);
              }}
              onSharePress={() => console.log('Share documents required transfer')}
              showShareButton={true}
            />
          </View>

          <View style={{ marginTop: 16 }}>
            <TransferCard 
              recipientName="Grace Wong"
              amount="10"
              currency="USD"
              status="Refund in progress"
              date="Sep 2"
              onPress={() => {
                console.log('Refund transfer card clicked');
                router.push({
                  pathname: '/transfer-detail',
                  params: { transferStatus: 'refund-progress' }
                } as any);
              }}
              onSharePress={() => console.log('Share refund transfer')}
              showShareButton={true}
            />
          </View>
        </View>

        {/* 最近收款人 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>RECENT RECIPIENTS</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          
          <RecipientCard 
            firstName="Grace"
            lastName="Wong"
            bankName="Bank of China Lim..."
            accountNumber="6414"
            avatarSource={require('@/assets/images/user-avatar.png')}
            flagSource={require('@/assets/images/china-flag.png')}
            onPress={() => console.log('Recipient card pressed')}
            onMorePress={() => console.log('More options pressed')}
            showMoreButton={true}
          />
        </View>

      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
    paddingBottom: 120, // 为tab bar留出更多空间
  },



  // 通用section样式
  section: {
    paddingHorizontal: 16,
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8D8D8D',
    letterSpacing: 0.5,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#393939',
  },

  // 保留的样式已清理完毕
});
