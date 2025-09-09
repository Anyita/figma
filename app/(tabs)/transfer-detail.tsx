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
import { DoneIcon } from '@/components/icons/DoneIcon';
import { FailedIcon } from '@/components/icons/FailedIcon';
import { ShareIcon } from '@/components/icons/ShareIcon';
import { WaitIcon } from '@/components/icons/WaitIcon';

export default function TransferDetailScreen() {
  const router = useRouter();
  const { estimatedTime, transferStatus } = useLocalSearchParams<{
    selectedPayment?: string;
    estimatedTime?: string;
    transferStatus?: string;
  }>();

  // 根据transferStatus生成不同的时间线数据
  const getTimelineData = () => {
    switch (transferStatus) {
      case 'documents-required':
        return [
          {
            id: 1,
            title: 'Transfer submitted',
            time: 'Sep 2 at 7:30pm',
            completed: true,
            description: ''
          },
          {
            id: 2,
            title: 'Under review',
            time: 'Sep 2 at 9:15pm',
            completed: true,
            description: 'Your transfer is under a standard compliance check required by U.S. financial authorities (FinCEN & OFAC)'
          },
          {
            id: 3,
            title: 'More documents required',
            time: '',
            completed: true,
            description: 'Don\'t worry — your funds are securely held in the Ria system.',
            actionText: 'See accepted document types',
            showUploadButton: true
          },
          {
            id: 4,
            title: 'Documents received – under review',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 5,
            title: 'Review complete – Processing',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 6,
            title: 'Money on the way to recipient',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 7,
            title: 'Transfer received by partner',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 8,
            title: 'Transfer was paid out',
            time: '',
            completed: false,
            description: '',
            estimatedTime: estimatedTime || '24hrs'
          }
        ];
      
      case 'refund-progress':
        return [
          {
            id: 1,
            title: 'Transfer submitted',
            time: 'Sep 2 at 7:30pm',
            completed: true,
            description: ''
          },
          {
            id: 2,
            title: 'Under review',
            time: 'Sep 2 at 9:15pm',
            completed: true,
            description: 'Your transfer is under a standard compliance check required by U.S. financial authorities (FinCEN & OFAC)'
          },
          {
            id: 3,
            title: 'Review not approved – transfer cancelled',
            time: 'Sep 3 at 10:23am',
            completed: true,
            failed: true,
            description: 'Sorry, the transfer didn\'t meet regulatory requirements. A full refund will be issued automatically.'
          },
          {
            id: 4,
            title: 'Refund initiated',
            time: 'Sep 3 at 11:43am',
            completed: true,
            description: ''
          },
          {
            id: 5,
            title: 'Refund in progress',
            time: '',
            completed: true,
            description: ''
          },
          {
            id: 6,
            title: 'Refund completed',
            time: '',
            completed: false,
            description: '',
            estimatedTime: estimatedTime || 'expected in 3–10 business days'
          }
        ];
      
      default: // 'under-review' or any other status
        return [
          {
            id: 1,
            title: 'Transfer submitted',
            time: 'Sep 2 at 7:30pm',
            completed: true,
            description: ''
          },
          {
            id: 2,
            title: 'Under review',
            time: '',
            completed: true,
            description: 'Your transfer is under a standard compliance check required by U.S. financial authorities (FinCEN & OFAC)'
          },
          {
            id: 3,
            title: 'Review complete – Processing',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 4,
            title: 'Money on the way to recipient',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 5,
            title: 'Transfer received by partner',
            time: '',
            completed: false,
            description: ''
          },
          {
            id: 6,
            title: 'Transfer was paid out',
            time: '',
            completed: false,
            description: '',
            estimatedTime: estimatedTime || '2hrs'
          }
        ];
    }
  };

  const timelineData = getTimelineData();

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

        {/* Timeline Card */}
        <View style={styles.timelineCard}>
          <View style={styles.timelineContainer}>
            {/* 连续的连接线背景 */}
            <View style={styles.timelineLineBackground} />
            
            {/* 已完成部分的蓝色覆盖线 */}
            {(() => {
              const completedCount = timelineData.filter(item => item.completed).length;
              if (completedCount > 1) {
                // 每个项目间距40px，已完成的线应该到达第二个已完成项目的中心
                const completedHeight = (completedCount - 1) * 40 + 10;
                return (
                  <View style={[
                    styles.timelineLineCompleted,
                    { height: completedHeight }
                  ]} />
                );
              }
              return null;
            })()}
            
            {timelineData.map((item, index) => (
              <View key={item.id} style={[
                styles.timelineItem,
                index === timelineData.length - 1 && styles.timelineItemLast
              ]}>
                <View style={styles.timelineLeft}>
                  {item.completed ? (
                    (item as any).failed ? (
                      <FailedIcon width={20} height={20} />
                    ) : item.id === 1 ? (
                      <DoneIcon width={20} height={20} />
                    ) : (
                      <WaitIcon width={20} height={20} />
                    )
                  ) : (
                    <View style={styles.timelineDotPending} />
                  )}
                </View>
                
                <View style={styles.timelineContent}>
                  <View style={styles.timelineHeader}>
                    <View style={styles.timelineTitleContainer}>
                      <Text style={[
                        styles.timelineTitle,
                        item.completed ? styles.timelineTitleCompleted : styles.timelineTitlePending
                      ]}>
                        {item.title}
                      </Text>
                      {(item as any).actionText && (
                        <TouchableOpacity style={styles.actionTextButton}>
                          <Text style={styles.actionText}>{(item as any).actionText}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    {(item as any).showUploadButton && (
                      <TouchableOpacity style={styles.uploadButton}>
                        <Text style={styles.uploadButtonText}>Upload</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  {item.time && (
                    <Text style={styles.timelineTime}>{item.time}</Text>
                  )}
                  {item.description && (
                    <Text style={styles.timelineDescription}>{item.description}</Text>
                  )}
                  {item.estimatedTime && (
                    <Text style={styles.estimatedTime}>
                      {item.estimatedTime.includes('Estimated') ? item.estimatedTime : `Estimated ${item.estimatedTime}`}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
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
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  timelineContainer: {
    position: 'relative',
  },
  timelineLineBackground: {
    position: 'absolute',
    left: 10,
    top: 20,
    bottom: 20,
    width: 2,
    backgroundColor: '#C3C3C3',
  },
  timelineLineCompleted: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: 2,
    backgroundColor: '#313F5B',
    zIndex: 0,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  timelineItemLast: {
    marginBottom: 8,
  },
  timelineLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  timelineDotPending: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#C3C3C3',
  },
  timelineContent: {
    flex: 1,
    justifyContent: 'center',
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  timelineTitleCompleted: {
    color: '#333333',
  },
  timelineTitlePending: {
    color: '#8D8D8D',
  },
  timelineTime: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8D8D8D',
    marginBottom: 8,
  },
  timelineDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8D8D8D',
    lineHeight: 16,
    marginBottom: 8,
  },
  estimatedTime: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF6E13',
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  timelineTitleContainer: {
    flex: 1,
  },
  actionTextButton: {
    marginTop: 2,
    marginBottom: 0,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6E13',
    textDecorationLine: 'underline',
  },
  uploadButton: {
    backgroundColor: '#FF6E14',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  uploadButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});
