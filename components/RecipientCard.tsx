import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * RecipientCard - 收款人卡片组件
 * 
 * Features:
 * - 显示收款人信息
 * - 支持头像和国旗显示
 * - 可自定义操作按钮
 */
export interface RecipientCardProps {
  firstName: string;
  lastName: string;
  bankName: string;
  accountNumber: string;
  avatarSource?: any;
  flagSource?: any;
  onPress?: () => void;
  onMorePress?: () => void;
  showMoreButton?: boolean;
}

export function RecipientCard({
  firstName,
  lastName,
  bankName,
  accountNumber,
  avatarSource,
  flagSource,
  onPress,
  onMorePress,
  showMoreButton = true,
}: RecipientCardProps) {
  return (
    <TouchableOpacity 
      style={styles.recipientCard}
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Recipient ${firstName} ${lastName}, ${bankName}`}
    >
      <View style={styles.avatarContainer}>
        {avatarSource ? (
          <Image 
            source={avatarSource}
            style={styles.userAvatar}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.defaultAvatar}>
            <Text style={styles.avatarText}>🏦</Text>
          </View>
        )}
        {flagSource && (
          <Image 
            source={flagSource}
            style={styles.flagIcon}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.recipientDetails}>
        <Text style={styles.recipientName}>{firstName}</Text>
        <Text style={styles.recipientName}>{lastName}</Text>
        <Text 
          style={styles.recipientBank}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {bankName}
        </Text>
        <Text style={styles.recipientAccount}>{accountNumber}</Text>
      </View>
      {showMoreButton && onMorePress && (
        <TouchableOpacity 
          style={styles.moreButton}
          onPress={onMorePress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="More options"
        >
          <View style={styles.moreDots}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  defaultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
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
});
