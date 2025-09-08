import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function SendMoneyScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState('10');
  const [receiveAmount, setReceiveAmount] = useState('71.15');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('Apple Pay');

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 'bank',
      name: 'Bank',
      displayName: 'Bank',
      fee: '3.50 USD',
      time: 'Estimated 2hrs',
      selected: false,
      badge: 'Lowest fee',
      badgeIcon: '🪙',
      badgeColor: '#DEF7E8',
      textColor: '#055E2A',
      icon: '🏦'
    },
    {
      id: 'credit',
      name: 'Credit card',
      displayName: 'Credit',
      fee: '7.00 USD',
      time: 'Estimated 3~4 business day',
      selected: false,
      icon: '💳'
    },
    {
      id: 'debit',
      name: 'Debit card',
      displayName: 'Debit',
      fee: '4.00 USD',
      time: 'Estimated 15mins',
      selected: false,
      badge: 'Faster',
      badgeIcon: '⚡',
      badgeColor: '#69A2FF',
      textColor: '#0156B3',
      icon: '💳'
    },
    {
      id: 'seven',
      name: '7-Eleven',
      displayName: '7-Eleven',
      fee: '7.00 USD',
      time: 'Estimated 3~4 business day',
      selected: false,
      icon: '🏪'
    },
    {
      id: 'apple',
      name: 'Apple Pay (debit only)',
      displayName: 'Apple Pay',
      fee: '4.00 USD',
      time: 'Estimated 2hrs',
      selected: true,
      icon: '📱'
    }
  ]);

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
          onPress={() => router.push('/(tabs)/' as any)}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send money</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Amount Section */}
        <View style={styles.amountSection}>
          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>You send</Text>
            <View style={styles.amountRow}>
              <View style={styles.currencyContainer}>
                <View style={styles.flagIcon}>
                  <Text style={styles.flagText}>🇺🇸</Text>
                </View>
                <Text style={styles.currencyLabel}>USD</Text>
              </View>
              <Text style={styles.amountValue}>{amount}</Text>
            </View>
          </View>
          
          <View style={styles.exchangeRate}>
            <View style={styles.rateCard}>
              <Text style={styles.rateText}>1 USD →</Text>
              <Text style={styles.rateValueOld}>7.0010</Text>
              <Text style={styles.rateValue}>7.11484 CNY</Text>
              <View style={styles.infoIcon}>
                <Text style={styles.infoText}>i</Text>
              </View>
            </View>
          </View>

          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>They receive</Text>
            <View style={styles.amountRow}>
              <View style={styles.currencyContainer}>
                <View style={styles.flagIcon}>
                  <Text style={styles.flagText}>🇨🇳</Text>
                </View>
                <Text style={styles.currencyLabel}>CNY</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
              </View>
              <Text style={styles.amountValue}>{receiveAmount}</Text>
            </View>
          </View>
        </View>

        {/* Deliver Section */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionIcon}>
              <Text style={styles.iconText}>🏦</Text>
            </View>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionLabel}>
                <Text style={styles.sectionLabelRegular}>Deliver to </Text>
                <Text style={styles.sectionLabelBold}>Bank</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.dropdownButton}>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Section */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionIcon}>
              <Text style={styles.iconText}>💳</Text>
            </View>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionLabel}>
                <Text style={styles.sectionLabelRegular}>Pay with </Text>
                <Text style={styles.sectionLabelBold}>{selectedPayment}</Text>
                <Text style={styles.estimateText}> ({paymentMethods.find(method => method.displayName === selectedPayment)?.time || 'estimate 2hrs'})</Text>
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => setShowPaymentModal(true)}
            >
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Code */}
        <View style={styles.promoSection}>
          <View style={styles.promoIcon}>
            <Text style={styles.promoIconText}>🎟️</Text>
          </View>
          <Text style={styles.promoText}>Add promo code</Text>
        </View>

      </ScrollView>

      {/* Fixed Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Fees and Total */}
        <View style={styles.feesSection}>
          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Fees</Text>
            <Text style={styles.feeValue}>3.50 USD</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>103.50 USD</Text>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => {
            const selectedMethod = paymentMethods.find(m => m.displayName === selectedPayment);
            const timeToPass = selectedMethod?.time || 'Estimated 2hrs';
            console.log('Send money - selectedPayment:', selectedPayment);
            console.log('Send money - selectedMethod:', selectedMethod);
            console.log('Send money - timeToPass:', timeToPass);
            
            router.push({
              pathname: '/(tabs)/transfer-summary' as any,
              params: {
                selectedPayment: selectedPayment,
                estimatedTime: timeToPass
              }
            })
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Method Modal */}
      <Modal
        visible={showPaymentModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHandle} />
              <Text style={styles.modalTitle}>Payment method</Text>
            </View>
            
            <ScrollView style={styles.paymentListContainer} showsVerticalScrollIndicator={false}>
              {paymentMethods.map((method, index) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethod,
                    method.selected && styles.selectedPaymentMethod
                  ]}
                  onPress={() => {
                    setSelectedPayment(method.displayName);
                    // 更新所有支付方式的选中状态
                    setPaymentMethods(prevMethods =>
                      prevMethods.map(m => ({
                        ...m,
                        selected: m.id === method.id
                      }))
                    );
                    setShowPaymentModal(false);
                  }}
                >
                  <View style={styles.paymentIcon}>
                    <Text style={styles.paymentIconText}>{method.icon}</Text>
                  </View>
                  
                  <View style={styles.paymentInfo}>
                    <View style={styles.paymentHeader}>
                      <Text style={styles.paymentName}>{method.name}</Text>
                      {method.badge && (
                        <View style={[styles.paymentBadge, { backgroundColor: method.badgeColor }]}>
                          <Text style={[styles.badgeText, { color: method.textColor }]}>
                            {method.badgeIcon && <Text style={styles.badgeIcon}>{method.badgeIcon}</Text>}
                            {method.badge}
                          </Text>
                        </View>
                      )}
                    </View>
                    
                    <View style={styles.paymentDetails}>
                      <Text style={styles.paymentFee}>{method.fee}</Text>
                      <Text style={styles.paymentLabel}>Fee</Text>
                      <View style={styles.dot} />
                      <Text style={styles.paymentTime}>{method.time}</Text>
                    </View>
                  </View>

                  {method.selected && (
                    <View style={styles.selectedIndicator}>
                      <Text style={styles.checkmark}>✓</Text>
                    </View>
                )}
              </TouchableOpacity>
            ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 8,
    height: 44,
    backgroundColor: '#F6F6F6',
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
    width: 24,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
  placeholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 120, // 为底部固定区域留出空间
  },
  amountSection: {
    marginBottom: 16,
  },
  amountCard: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  amountLabel: {
    fontSize: 16,
    color: '#393939',
    marginBottom: 8,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#393939',
  },
  amountValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#393939',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 4,
  },
  flagIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagText: {
    fontSize: 12,
  },
  exchangeRate: {
    alignItems: 'center',
    marginTop: -14,
    marginBottom: -14,
    zIndex: 1,
  },
  rateCard: {
    backgroundColor: '#D8F8E7',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 6,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#393939',
  },
  rateValueOld: {
    fontSize: 14,
    fontWeight: '500',
    color: '#868FA2',
    textDecorationLine: 'line-through',
  },
  rateValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#008A34',
  },
  infoIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#008A34',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  infoText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  section: {
    marginBottom: 16,
  },
  sectionCard: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 16,
  },
  sectionContent: {
    flex: 1,
  },
  sectionLabel: {
    fontSize: 16,
    color: '#393939',
  },
  sectionLabelRegular: {
    fontSize: 16,
    fontWeight: '400',
    color: '#393939',
  },
  sectionLabelBold: {
    fontSize: 16,
    fontWeight: '600',
    color: '#393939',
  },
  sectionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#393939',
  },
  estimateText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF6100',
  },
  dropdownButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#595959',
  },
  promoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  promoIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  promoIconText: {
    fontSize: 16,
  },
  promoText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  feesSection: {
    marginBottom: 16,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  feeLabel: {
    fontSize: 16,
    color: '#393939',
  },
  feeValue: {
    fontSize: 16,
    color: '#393939',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: '#393939',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#393939',
  },
  continueButton: {
    backgroundColor: '#FF6100',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    maxHeight: '80%',
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalHandle: {
    width: 40,
    height: 3,
    backgroundColor: '#ACB1BB',
    borderRadius: 2,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
  },
  paymentListContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    paddingVertical: 8,
    maxHeight: 400,
  },
  paymentMethod: {
    backgroundColor: 'transparent',
    padding: 16,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedPaymentMethod: {
    backgroundColor: '#FFF7F2',
  },
  paymentIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  paymentIconText: {
    fontSize: 16,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#393939',
    marginRight: 8,
  },
  paymentBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  badgeIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  paymentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  paymentFee: {
    fontSize: 14,
    color: '#595959',
  },
  paymentLabel: {
    fontSize: 14,
    color: '#595959',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#595959',
  },
  paymentTime: {
    fontSize: 14,
    color: '#595959',
  },
  selectedIndicator: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#FF6100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
});