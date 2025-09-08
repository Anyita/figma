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

export default function TransferSummaryScreen() {
  const router = useRouter();
  const { selectedPayment, estimatedTime } = useLocalSearchParams<{
    selectedPayment?: string;
    estimatedTime?: string;
  }>();

  console.log('Transfer summary - selectedPayment:', selectedPayment);
  console.log('Transfer summary - estimatedTime:', estimatedTime);

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
          onPress={() => router.push('/(tabs)/send-money' as any)}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpIcon}>?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Transfer summary</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Recipient Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recipient</Text>
          
          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Grace Wong</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Destination</Text>
            <View style={styles.destinationRow}>
              <Text style={styles.flagIcon}>🇨🇳</Text>
              <Text style={styles.value}>China</Text>
            </View>
          </View>
        </View>

        {/* Delivery Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery method</Text>
          
          <View style={styles.row}>
            <Text style={styles.label}>Bank deposit</Text>
            <View style={styles.bankInfo}>
              <Text style={styles.bankName}>Bank of china</Text>
              <Text style={styles.accountNumber}>lim... •••• 6414</Text>
            </View>
          </View>
        </View>

        {/* Payment Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment method</Text>
          
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentMethod}>{selectedPayment || 'Apple Pay'}</Text>
            <Text style={styles.estimatedTime}>{estimatedTime || 'Estimated 2hrs'}</Text>
          </View>
          
          <Text style={styles.paymentNote}>
            {selectedPayment === 'Apple Pay' 
              ? 'Only debit cards are accepted with Apple Pay.'
              : selectedPayment === 'Bank'
              ? 'Bank transfer will be processed within business hours.'
              : selectedPayment === 'Credit'
              ? 'Credit card payments may incur additional processing fees.'
              : selectedPayment === 'Debit'
              ? 'Debit card payments are processed instantly.'
              : 'Payment method details and terms apply.'
            }
          </Text>
        </View>

        {/* Transfer Details Section */}
        <View style={styles.transferSection}>
          <View style={styles.transferHeader}>
            <Text style={styles.sectionTitle}>Transfer</Text>
            <View style={styles.transferIcon}>
              <Text style={styles.transferIconText}>✏️</Text>
            </View>
          </View>
          
          <View style={styles.transferContent}>
            <View style={styles.row}>
              <Text style={styles.label}>Sending amount</Text>
              <Text style={styles.amountValue}>10 USD</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Transfer fees</Text>
              <Text style={styles.amountValue}>3.5 USD</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Transfer taxes</Text>
              <Text style={styles.amountValue}>0 USD</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Total</Text>
              <Text style={styles.totalValue}>13.5 USD</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.row}>
              <Text style={styles.label}>Total to recipient*</Text>
              <Text style={styles.recipientValue}>71.15 CNY</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => router.push({
            pathname: '/(tabs)/order-confirm' as any,
            params: {
              selectedPayment: selectedPayment || 'Apple Pay',
              estimatedTime: estimatedTime || 'Estimated 2hrs'
            }
          })}
        >
          <Text style={styles.confirmButtonText}>Confirm & Send</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: '#393939',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3B393C',
  },
  helpButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: 16,
    color: '#393939',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
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
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  destinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flagIcon: {
    fontSize: 16,
  },
  bankInfo: {
    alignItems: 'flex-end',
  },
  bankName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  accountNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  paymentMethod: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B393B',
  },
  estimatedTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6E16',
  },
  paymentNote: {
    fontSize: 12,
    fontWeight: '400',
    color: '#939193',
    lineHeight: 14,
  },
  transferSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  transferHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  transferIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferIconText: {
    fontSize: 16,
    transform: [{ scaleX: -1 }],
  },
  transferContent: {
    position: 'relative',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEBED',
    marginVertical: 16,
  },
  amountValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  recipientValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B393B',
    textAlign: 'right',
  },
  buttonContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  confirmButton: {
    backgroundColor: '#FF6100',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});
