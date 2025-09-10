import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DoneIcon } from '@/components/icons/DoneIcon';
import { WaitIcon } from '@/components/icons/WaitIcon';

/**
 * DocumentsRequiredTimeline - 需要补充文件状态的时间线组件
 *
 * 显示转账需要补充文件的时间线状态
 * 包含：提交转账 -> 审核中 -> 需要补充文件 -> 后续待完成步骤
 */
interface DocumentsRequiredTimelineProps {
  estimatedTime?: string;
  onUploadPress?: () => void;
  onDocumentTypesPress?: () => void;
}

export function DocumentsRequiredTimeline({
  estimatedTime = '',
  onUploadPress,
  onDocumentTypesPress
}: DocumentsRequiredTimelineProps) {
  const timelineData = [
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
      description: ''
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
      estimatedTime: estimatedTime
    }
  ];

  const completedCount = timelineData.filter(item => item.completed).length;

  return (
    <View style={styles.timelineCard}>
      <View style={styles.timelineContainer}>
        {/* 连续的连接线背景 */}
        <View style={styles.timelineLineBackground} />

        {/* 已完成部分的蓝色覆盖线 */}
        {completedCount > 1 && (
          <View style={[
            styles.timelineLineCompleted,
            { height: (completedCount + 2) * 40 + 10 }
          ]} />
        )}

        {timelineData.map((item, index) => (
          <View key={item.id} style={[
            styles.timelineItem,
            index === timelineData.length - 1 && styles.timelineItemLast
          ]}>
            <View style={styles.timelineLeft}>
              {item.completed ? (
                item.id === 1 || item.id === 2 ? (
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
                    <TouchableOpacity
                      style={styles.actionTextButton}
                      onPress={onDocumentTypesPress}
                      accessible={true}
                      accessibilityRole="button"
                      accessibilityLabel="View accepted document types"
                    >
                      <Text style={styles.actionText}>{(item as any).actionText}</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {(item as any).showUploadButton && (
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={onUploadPress}
                    accessible={true}
                    accessibilityRole="button"
                    accessibilityLabel="Upload documents"
                  >
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
  );
}

const styles = StyleSheet.create({
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
    color: '#055E2A',
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
