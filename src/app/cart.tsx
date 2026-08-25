import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, SafeAreaView } from 'react-native';
import { Colors, Typography } from '../constants/Colors';
import { DUMMY_CART_ITEMS } from '../constants/dummyData';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function CartScreen() {
  const deliveryFee = 40;
  const subtotal = DUMMY_CART_ITEMS.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.deliveryInfo}>
          <MaterialIcons name="local-shipping" size={24} color={Colors.primaryContainer} />
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliveryTitle}>Delivery in 15 mins</Text>
            <Text style={styles.deliveryDesc}>To Home - 123 Fresh Ave</Text>
          </View>
          <Pressable>
            <Text style={styles.changeText}>Change</Text>
          </Pressable>
        </View>

        <View style={styles.itemsContainer}>
          {DUMMY_CART_ITEMS.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.product.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName} numberOfLines={1}>{item.product.name}</Text>
                <Text style={styles.itemUnit}>{item.product.unit}</Text>
                <Text style={styles.itemPrice}>₹{item.product.price}</Text>
              </View>
              <View style={styles.quantitySelector}>
                <Pressable style={styles.qtyButton}>
                  <MaterialIcons name="remove" size={16} color={Colors.onSurface} />
                </Pressable>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <Pressable style={styles.qtyButton}>
                  <MaterialIcons name="add" size={16} color={Colors.onSurface} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.billDetails}>
          <Text style={styles.billTitle}>Bill Details</Text>
          <View style={styles.billRow}>
            <Text style={styles.billText}>Item Total</Text>
            <Text style={styles.billText}>₹{subtotal}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billText}>Delivery Fee</Text>
            <Text style={styles.billText}>₹{deliveryFee}</Text>
          </View>
          <View style={[styles.billRow, styles.totalRow]}>
            <Text style={styles.totalText}>Grand Total</Text>
            <Text style={styles.totalText}>₹{total}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerTotal}>
          <Text style={styles.footerTotalLabel}>Total</Text>
          <Text style={styles.footerTotalAmount}>₹{total}</Text>
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Pay</Text>
          <MaterialIcons name="arrow-forward" size={20} color={Colors.onError} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayBorder,
    alignItems: 'center',
  },
  headerTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerHighest,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  deliveryTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  deliveryTitle: {
    ...Typography.bodyMd,
    fontWeight: '600',
    color: Colors.onSurface,
  },
  deliveryDesc: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    fontSize: 12,
  },
  changeText: {
    ...Typography.labelMd,
    color: Colors.primary,
  },
  itemsContainer: {
    marginBottom: 24,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: Colors.surfaceContainerLowest,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.lightGrayBorder,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: Colors.surfaceVariant,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    ...Typography.bodyMd,
    fontWeight: '600',
    color: Colors.onSurface,
  },
  itemUnit: {
    ...Typography.bodyMd,
    color: Colors.outline,
    fontSize: 12,
    marginVertical: 4,
  },
  itemPrice: {
    ...Typography.bodyMd,
    fontWeight: '600',
    color: Colors.onSurface,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyButton: {
    padding: 4,
  },
  qtyText: {
    ...Typography.bodyMd,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  billDetails: {
    backgroundColor: Colors.surfaceContainerLowest,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.lightGrayBorder,
  },
  billTitle: {
    ...Typography.headlineSm,
    fontSize: 16,
    marginBottom: 16,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billText: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrayBorder,
  },
  totalText: {
    ...Typography.bodyMd,
    fontWeight: '700',
    color: Colors.onSurface,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.surfaceContainerLowest,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrayBorder,
  },
  footerTotal: {},
  footerTotalLabel: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
  },
  footerTotalAmount: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryContainer,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  checkoutText: {
    ...Typography.buttonText,
    color: Colors.onError,
    marginRight: 8,
  },
});
