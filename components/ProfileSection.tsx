import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LabaIcon } from './icons/LabaIcon';

/**
 * ProfileSection - 用户头像和操作按钮区域组件
 * 
 * Features:
 * - 显示用户头像图标
 * - "Refer and earn" 按钮
 * - 帮助按钮
 */
export interface ProfileSectionProps {
  onReferPress?: () => void;
  onHelpPress?: () => void;
  showReferButton?: boolean;
  showHelpButton?: boolean;
}

export function ProfileSection({
  onReferPress,
  onHelpPress,
  showReferButton = true,
  showHelpButton = true,
}: ProfileSectionProps) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.profileIcon}>
        <View style={styles.profileIconCircle}>
          <View style={styles.profileIconHead} />
          <View style={styles.profileIconBody} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {showReferButton && (
          <TouchableOpacity 
            style={styles.referButton}
            onPress={onReferPress}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Refer and earn"
          >
            <LabaIcon width={16} height={16} color="#055E2A" />
            <Text style={styles.referButtonText}>Refer and earn</Text>
          </TouchableOpacity>
        )}
        {showHelpButton && (
          <TouchableOpacity 
            style={styles.helpButton}
            onPress={onHelpPress}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Help"
          >
            <Text style={styles.helpButtonText}>?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 用户头像和操作按钮
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F6F6F6',
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
});
