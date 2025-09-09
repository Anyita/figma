import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DocIcon } from './icons/DocIcon';
import { RefundIcon } from './icons/RefundIcon';
import { TimeIcon } from './icons/TimeIcon';

/**
 * TransferCard - 转账卡片组件
 * 
 * Features:
 * - 显示转账信息
 * - 支持点击事件
 * - 可自定义图标和状态
 */
export interface TransferCardProps {
  recipientName: string;
  amount: string;
  currency: string;
  status: string;
  date: string;
  onPress?: () => void;
  onSharePress?: () => void;
  showShareButton?: boolean;
}

export function TransferCard({
  recipientName,
  amount,
  currency,
  status,
  date,
  onPress,
  onSharePress,
  showShareButton = true,
}: TransferCardProps) {
  return (
    <TouchableOpacity 
      style={styles.transferCard}
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Transfer to ${recipientName}, ${amount} ${currency}, ${status}`}
    >
      <View style={styles.transferInfo}>
        <View style={styles.clockIconContainer}>
          <View style={styles.clockIcon}>
            {status === "Under review" && <TimeIcon width={20} height={20} color="#636E82" />}
            {status === "More documents required" && <DocIcon width={20} height={20} color="#636E82" />}
            {status === "Refund in progress" && <RefundIcon width={20} height={20} color="#636E82" />}
          </View>
        </View>
        <View style={styles.transferDetails}>
          <Text style={styles.transferName}>{recipientName}</Text>
          <Text style={styles.transferAmount}>{amount} {currency}</Text>
          <Text style={styles.transferStatus}>
            <Text style={[
              styles.transferStatus,
              status === "More documents required" && styles.transferStatusWarning
            ]}>
              {status}
            </Text>
            <Text style={styles.transferStatus}> · {date}</Text>
          </Text>
        </View>
      </View>
      {showShareButton && onSharePress && (
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={onSharePress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Share transfer"
        >
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  transferStatusWarning: {
    color: '#FF6E13',
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
});
