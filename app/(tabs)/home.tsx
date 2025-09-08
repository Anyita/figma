import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 状态栏 */}
        <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 用户头像和操作按钮 */}
        <View style={[styles.profileSection, { backgroundColor: '#F6F6F6' }]}>
          <View style={styles.profileIcon}>
            <View style={styles.profileIconCircle}>
              <View style={styles.profileIconHead} />
              <View style={styles.profileIconBody} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.referButton}>
              <View style={styles.megaphoneIcon}>
                <View style={styles.megaphoneBody} />
                <View style={styles.megaphoneHandle} />
                <View style={styles.megaphoneOpening} />
              </View>
              <Text style={styles.referButtonText}>Refer and earn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpButton}>
              <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 货币转换器 */}
        <View style={[styles.currencySection, { backgroundColor: '#F6F6F6' }]}>
          <View style={styles.currencyCard}>
            <View style={styles.currencyInfo}>
              <View style={styles.currencyFromRow}>
                <Text style={styles.currencyFrom}>1 USD</Text>
                <View style={styles.arrowIcon}>
                  <Text style={styles.arrowText}>↕</Text>
                </View>
              </View>
              <View style={styles.currencyToRow}>
                <Text style={styles.currencyTo}>7.0010 CNY</Text>
                <TouchableOpacity style={styles.infoIcon}>
                  <Text style={styles.infoText}>i</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* 通知横幅 */}
        <View style={styles.notificationBanner}>
          <Text style={styles.notificationText}>
            We're noticed your recent transfer is taking longer than expected. 
            We're working on it! Thank you for your patience! Tap 'Ask for Help' if you need support.
          </Text>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeIcon}>×</Text>
          </TouchableOpacity>
        </View>

        {/* 最近转账 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>RECENT TRANSFERS</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.transferCard}
            onPress={() => {
              console.log('Transfer card clicked - navigating to transfer-detail');
              router.navigate('/transfer-detail');
            }}
          >
            <View style={styles.transferInfo}>
              <View style={styles.clockIconContainer}>
                <View style={styles.clockIcon}>
                  <Text style={styles.clockText}>🕐</Text>
                </View>
              </View>
              <View style={styles.transferDetails}>
                <Text style={styles.transferName}>Grace Wong</Text>
                <Text style={styles.transferAmount}>10 USD</Text>
                <Text style={styles.transferStatus}>Under review · Sep 2</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* 最近收款人 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>RECENT RECIPIENTS</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.recipientCard}>
            <View style={styles.avatarContainer}>
              <Image 
                source={require('@/assets/images/user-avatar.png')} 
                style={styles.userAvatar}
                resizeMode="cover"
              />
              <Image 
                source={require('@/assets/images/china-flag.png')} 
                style={styles.flagIcon}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipientDetails}>
              <Text style={styles.recipientName}>Bing</Text>
              <Text style={styles.recipientName}>Chen</Text>
              <Text style={styles.recipientBank}>Bank of China Lim...</Text>
              <Text style={styles.recipientAccount}>6414</Text>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <View style={styles.moreDots}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </TouchableOpacity>
          </View>
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

  scrollView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
  },

  // 用户头像和操作按钮
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconCircle: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#666666',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileIconHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#666666',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 6,
  },
  profileIconBody: {
    width: 16,
    height: 8,
    borderWidth: 2,
    borderColor: '#666666',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 0,
    position: 'absolute',
    bottom: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  referButton: {
    backgroundColor: '#DEF7E8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  megaphoneIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  megaphoneBody: {
    width: 8,
    height: 6,
    borderWidth: 2,
    borderColor: '#055E2A',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'absolute',
    left: 4,
    top: 6,
  },
  megaphoneHandle: {
    width: 2,
    height: 4,
    borderWidth: 2,
    borderColor: '#055E2A',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderRightWidth: 0,
    position: 'absolute',
    left: 2,
    top: 7,
  },
  megaphoneOpening: {
    width: 6,
    height: 2,
    borderWidth: 2,
    borderColor: '#055E2A',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomWidth: 0,
    position: 'absolute',
    left: 5,
    top: 4,
  },
  referButtonText: {
    color: '#055E2A',
    fontSize: 12,
    fontWeight: '600',
  },
  helpButton: {
    width: 32,
    height: 32,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#666666',
  },
  helpButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
  },

  // 货币转换器
  currencySection: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  currencyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  currencyInfo: {
    flex: 1,
  },
  currencyFromRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  currencyFrom: {
    fontSize: 12,
    fontWeight: '600',
    color: '#595959',
  },
  arrowIcon: {
    marginLeft: 8,
  },
  arrowText: {
    fontSize: 12,
    color: '#595959',
  },
  currencyToRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyTo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#393939',
  },
  infoIcon: {
    marginLeft: 8,
    width: 16,
    height: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  infoText: {
    fontSize: 10,
    color: '#666666',
    fontWeight: '600',
  },

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
    borderLeftColor: '#FFD7BF',
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

  // 转账卡片
  transferCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    height: 92,
  },
  transferInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  clockIconContainer: {
    marginRight: 16,
  },
  clockIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockText: {
    fontSize: 20,
  },
  transferDetails: {
    flex: 1,
  },
  transferName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#393939',
    marginBottom: 4,
  },
  transferAmount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#393939',
    marginBottom: 4,
  },
  transferStatus: {
    fontSize: 12,
    fontWeight: '400',
    color: '#595959',
  },
  shareButton: {
    backgroundColor: '#FFD7BF',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    height: 32,
    justifyContent: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },

  // 收款人卡片
  recipientCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    height: 172,
    width: 152,
    position: 'relative',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  flagIcon: {
    position: 'absolute',
    top: 29,
    left: 30,
    width: 17,
    height: 17,
    borderRadius: 8.5,
  },
  recipientDetails: {
    flex: 1,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  recipientBank: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8D8D8D',
    marginBottom: 4,
  },
  recipientAccount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8D8D8D',
  },
  moreButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#8D8D8D',
  },

  // 底部图片
});
