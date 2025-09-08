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

export default function TransferDetailScreen() {
  const router = useRouter();
  const { selectedPayment, estimatedTime } = useLocalSearchParams<{
    selectedPayment?: string;
    estimatedTime?: string;
  }>();

  // 时间线数据
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
      description: ''
    }
  ];

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
          onPress={() => router.back()}
        >
          <View style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer details</Text>
        <TouchableOpacity style={styles.moreButton}>
          <View style={styles.moreIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Transfer Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transfer details</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Order number</Text>
            <View style={styles.detailValueContainer}>
              <Text style={styles.detailValue}>US1992037121</Text>
              <View style={styles.statusIndicator} />
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

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Timeline</Text>
            <Text style={styles.summaryTitle}>Summary</Text>
          </View>
          
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Timeline Card */}
        <View style={styles.timelineCard}>
          {timelineData.map((item, index) => (
            <View key={item.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[
                  styles.timelineDot,
                  item.completed ? styles.timelineDotCompleted : styles.timelineDotPending
                ]}>
                  {item.completed && (
                    <View style={styles.timelineCheckmark} />
                  )}
                </View>
                {index < timelineData.length - 1 && (
                  <View style={[
                    styles.timelineLine,
                    item.completed ? styles.timelineLineCompleted : styles.timelineLinePending
                  ]} />
                )}
              </View>
              
              <View style={styles.timelineContent}>
                <Text style={[
                  styles.timelineTitle,
                  item.completed ? styles.timelineTitleCompleted : styles.timelineTitlePending
                ]}>
                  {item.title}
                </Text>
                {item.time && (
                  <Text style={styles.timelineTime}>{item.time}</Text>
                )}
                {item.description && (
                  <Text style={styles.timelineDescription}>{item.description}</Text>
                )}
                {item.id === 6 && (
                  <Text style={styles.estimatedTime}>
                    {estimatedTime || 'Estimated 2hrs'}
                  </Text>
                )}
              </View>
            </View>
          ))}
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
    paddingBottom: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#393939',
    transform: [{ rotate: '45deg' }],
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
  },
  moreButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#393939',
    borderRadius: 8,
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
  statusIndicator: {
    width: 16,
    height: 16,
    backgroundColor: '#FF6E13',
    borderRadius: 8,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#393939',
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#717171',
  },
  progressBar: {
    height: 2,
    backgroundColor: '#E4E4E4',
    borderRadius: 1,
  },
  progressFill: {
    height: 2,
    width: '50%',
    backgroundColor: '#FF6E14',
    borderRadius: 1,
  },
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 32,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineLeft: {
    alignItems: 'center',
    marginRight: 16,
  },
  timelineDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineDotCompleted: {
    backgroundColor: '#313F5B',
  },
  timelineDotPending: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#C3C3C3',
  },
  timelineCheckmark: {
    width: 8,
    height: 8,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
  },
  timelineLine: {
    width: 2,
    marginTop: 4,
  },
  timelineLineCompleted: {
    backgroundColor: '#313F5B',
    height: 60,
  },
  timelineLinePending: {
    backgroundColor: '#C3C3C3',
    height: 60,
  },
  timelineContent: {
    flex: 1,
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
});
