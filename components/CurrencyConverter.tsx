import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * CurrencyConverter - 货币转换器组件
 * 
 * Features:
 * - 显示汇率信息
 * - 支持货币切换
 * - 信息按钮
 */
export interface CurrencyConverterProps {
  fromAmount?: string;
  fromCurrency?: string;
  toAmount?: string;
  toCurrency?: string;
  onInfoPress?: () => void;
  onSwapPress?: () => void;
}

export function CurrencyConverter({
  fromAmount = '1',
  fromCurrency = 'USD',
  toAmount = '7.0010',
  toCurrency = 'CNY',
  onInfoPress,
  onSwapPress,
}: CurrencyConverterProps) {
  return (
    <View style={styles.currencySection}>
      <View style={styles.currencyCard}>
        <View style={styles.currencyInfo}>
          <View style={styles.currencyFromRow}>
            <Text style={styles.currencyFrom}>{fromAmount} {fromCurrency}</Text>
            <TouchableOpacity style={styles.arrowIcon} onPress={onSwapPress}>
              <Text style={styles.arrowText}>↕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.currencyToRow}>
            <Text style={styles.currencyTo}>{toAmount} {toCurrency}</Text>
            <TouchableOpacity 
              style={styles.infoIcon}
              onPress={onInfoPress}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Currency information"
            >
              <Text style={styles.infoText}>i</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 货币转换器
  currencySection: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: '#F6F6F6',
  },
  currencyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  currencyInfo: {
    flex: 1,
  },
  currencyFromRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  currencyFrom: {
    fontSize: 12,
    fontWeight: '600',
    color: '#595959',
  },
  arrowIcon: {
    marginLeft: 8,
  },
  arrowText: {
    fontSize: 12,
    color: '#595959',
  },
  currencyToRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyTo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#393939',
  },
  infoIcon: {
    marginLeft: 8,
    width: 16,
    height: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  infoText: {
    fontSize: 10,
    color: '#666666',
    fontWeight: '600',
  },
});
