import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { BackIcon } from '@/components/icons/BackIcon';
import { CopyIcon } from '@/components/icons/CopyIcon';
import { ShareIcon } from '@/components/icons/ShareIcon';
import { DocumentsRequiredTimeline } from '@/components/timeline/DocumentsRequiredTimeline';
import { RefundProgressTimeline } from '@/components/timeline/RefundProgressTimeline';
import { UnderReviewTimeline } from '@/components/timeline/UnderReviewTimeline';

export default function TransferDetailScreen() {
  const router = useRouter();
  const { estimatedTime, transferStatus } = useLocalSearchParams<{
    selectedPayment?: string;
    estimatedTime?: string;
    transferStatus?: string;
  }>();

  // 处理文档上传按钮点击
  const handleUploadPress = () => {
    console.log('Upload button pressed');
    // TODO: 实现文档上传功能
  };

  // 处理查看接受的文档类型链接点击
  const handleDocumentTypesPress = () => {
    console.log('Document types link pressed');
    // TODO: 导航到文档类型说明页面
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/home' as any)}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Go back to home"
        >
          <BackIcon width={24} height={24} color="#393939" strokeWidth={1.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer details</Text>
        <TouchableOpacity
          style={styles.shareButton}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Share transfer details"
        >
          <ShareIcon width={24} height={24} color="#666666" />
        </TouchableOpacity>
      </View>

      {/* Tab Section */}
      <View style={styles.tabSection}>
        <View style={styles.tabHeader}>
          <Text style={styles.tabActive}>Timeline</Text>
          <Text style={styles.tabInactive}>Summary</Text>
        </View>

        <View style={styles.tabBar}>
          <View style={styles.tabIndicator} />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        {/* Transfer Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transfer details</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Order number</Text>
            <View style={styles.detailValueContainer}>
              <Text style={styles.detailValue}>US1992037121</Text>
              <TouchableOpacity
                style={styles.copyButton}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Copy order number"
                accessibilityHint="Copies the order number to clipboard"
              >
                <CopyIcon width={16} height={16} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status</Text>
            <Text style={styles.detailValue}>Under review</Text>
          </View>
        </View>

        {/* Recipient Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recipient</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={styles.detailValue}>Grace Wong</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount sent</Text>
            <Text style={styles.detailValue}>10 USD</Text>
          </View>
        </View>

        {/* Timeline Components - 根据不同状态渲染不同的时间线组件 */}
        {(() => {
          switch (transferStatus) {
            case 'documents-required':
              return (
                <DocumentsRequiredTimeline
                  estimatedTime={estimatedTime}
                  onUploadPress={handleUploadPress}
                  onDocumentTypesPress={handleDocumentTypesPress}
                />
              );
            case 'refund-progress':
              return (
                <RefundProgressTimeline
                  estimatedTime={estimatedTime}
                />
              );
            default: // 'under-review' or any other status
              return (
                <UnderReviewTimeline
                  estimatedTime={estimatedTime}
                />
              );
          }
        })()}
      </ScrollView>
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
    paddingBottom: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalIcon: {
    width: 18,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  batteryIcon: {
    width: 26,
    height: 13,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
  },
  shareButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#393939',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#393939',
    textAlign: 'right',
  },
  detailValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  copyButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  tabSection: {
    marginBottom: 16,
  },
  tabHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    paddingHorizontal: 16,
  },
  tabActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#393939',
    marginLeft: 54,
  },
  tabInactive: {
    fontSize: 14,
    fontWeight: '400',
    color: '#717171',
    marginLeft: 140,
  },
  tabBar: {
    height: 2,
    backgroundColor: '#E4E4E4',
    position: 'relative',
    width: '100%',
  },
  tabIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '50%',
    height: 2,
    backgroundColor: '#FF6E14',
  },
});
