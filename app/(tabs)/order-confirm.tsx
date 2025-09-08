import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function OrderConfirmScreen() {
  const router = useRouter();
  const { selectedPayment, estimatedTime } = useLocalSearchParams<{
    selectedPayment?: string;
    estimatedTime?: string;
  }>();

  // 从estimatedTime中提取时间信息
  const getEstimatedDeliveryTime = () => {
    console.log('Order confirm - estimatedTime:', estimatedTime);
    
    if (!estimatedTime) return '~2 hrs';
    
    // 处理不同的时间格式
    if (estimatedTime.includes('2hrs')) {
      return '~2 hrs';
    } else if (estimatedTime.includes('15mins')) {
      return '~15 mins';
    } else if (estimatedTime.includes('3~4 business day')) {
      return '~3-4 business days';
    } else if (estimatedTime.includes('1hr')) {
      return '~1 hr';
    }
    
    // 通用匹配：提取数字和时间单位
    const timeMatch = estimatedTime.match(/(\d+(?:\.\d+)?)\s*(hrs?|mins?|minutes?|hours?|business day)/i);
    if (timeMatch) {
      const number = timeMatch[1];
      const unit = timeMatch[2].toLowerCase();
      
      if (unit.includes('hr') || unit.includes('hour')) {
        return `~${number} ${unit.includes('hr') ? 'hrs' : 'hours'}`;
      } else if (unit.includes('min')) {
        return `~${number} mins`;
      } else if (unit.includes('day')) {
        return `~${number} business days`;
      }
    }
    
    return '~2 hrs';
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Success Icon and Message */}
        <View style={styles.successSection}>
          <View style={styles.successIcon}>
            <Image 
              source={require('@/assets/temp/yes.png')} 
              style={styles.successImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.successTitle}>Transfer created</Text>
          <Text style={styles.successMessage}>
            Your transfer has been submitted and is under review. Estimated delivery: {getEstimatedDeliveryTime()}.
          </Text>
        </View>

        {/* Order Number Section */}
        <View style={styles.orderNumberSection}>
          <Text style={styles.orderNumberLabel}>Order number:</Text>
          <Text style={styles.orderNumber}>US1992037121</Text>
        </View>

        {/* Transfer Details Section */}
        <View style={styles.transferSection}>
          <Text style={styles.sectionTitle}>Your transfer</Text>
          
          <View style={styles.transferContent}>
            <View style={styles.row}>
              <Text style={styles.label}>Amount sent</Text>
              <Text style={styles.amountValue}>10 USD</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Recipient country</Text>
              <View style={styles.countryRow}>
                <Text style={styles.flagIcon}>🇨🇳</Text>
                <Text style={styles.countryValue}>China</Text>
              </View>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.row}>
              <Text style={styles.label}>Grace gets</Text>
              <Text style={styles.recipientAmount}>71.15 CNY</Text>
            </View>
          </View>
        </View>

        {/* Recipient Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recipient details</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Full name</Text>
            <Text style={styles.detailValue}>Grace Wong</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>How do you know this person?</Text>
            <Text style={styles.detailValue}>Himself / Herself</Text>
          </View>
        </View>

        {/* Delivery Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery method</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Bank</Text>
            <Text style={styles.detailValue}>Bank Of China Limited</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Account</Text>
            <Text style={styles.detailValue}>6217897000004376414</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => router.push('/(tabs)/' as any)}
        >
          <Text style={styles.homeButtonText}>Go to Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share order details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
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
    paddingHorizontal: 16,
  },
  successSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  successIcon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  successImage: {
    width: 140,
    height: 140,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3B3A3C',
    marginBottom: 16,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF6100',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B393B',
    marginBottom: 16,
  },
  orderNumberSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumberLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3B393B',
    textAlign: 'right',
  },
  transferSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  transferContent: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3D3A3C',
  },
  amountValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEBED',
    marginVertical: 16,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flagIcon: {
    fontSize: 16,
  },
  countryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  recipientAmount: {
    fontSize: 18,
    fontWeight: '800',
    color: '#3B393B',
    textAlign: 'right',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3D3A3C',
    flex: 0.4,
    marginRight: 16,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
    flex: 0.6,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    padding: 16,
    paddingBottom: 32,
    gap: 16,
  },
  shareButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5E5C5E',
  },
  homeButton: {
    backgroundColor: '#FF6100',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});
