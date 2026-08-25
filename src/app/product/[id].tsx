import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, SafeAreaView } from 'react-native';
import { Colors, Typography } from '../../constants/Colors';
import { DUMMY_PRODUCTS } from '../../constants/dummyData';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // fallback to first product if not found
  const product = DUMMY_PRODUCTS.find(p => p.id === id) || DUMMY_PRODUCTS[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={Colors.onSurface} />
        </Pressable>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.unit}>{product.unit}</Text>
            </View>
            <Text style={styles.price}>₹{product.price}</Text>
          </View>
          
          <View style={styles.separator} />
          
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Product Details</Text>
            <Text style={styles.description}>
              {product.description}. Sourced fresh from local farms ensuring the best quality and taste. 
              Perfect for your everyday meals. Packed with care under strict hygiene standards.
            </Text>
          </View>
          
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Storage Info</Text>
            <Text style={styles.description}>Store in a cool, dry place or refrigerate for longer shelf life.</Text>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.quantitySelector}>
          <Pressable style={styles.qtyButton}>
            <MaterialIcons name="remove" size={24} color={Colors.onSurface} />
          </Pressable>
          <Text style={styles.qtyText}>1</Text>
          <Pressable style={styles.qtyButton}>
            <MaterialIcons name="add" size={24} color={Colors.onSurface} />
          </Pressable>
        </View>
        <Pressable style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
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
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    backgroundColor: Colors.surfaceVariant,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 24,
    backgroundColor: Colors.surfaceContainerLowest,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  title: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
    marginBottom: 4,
  },
  unit: {
    ...Typography.bodyMd,
    color: Colors.outline,
  },
  price: {
    ...Typography.headlineMd,
    color: Colors.primary,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.lightGrayBorder,
    marginBottom: 24,
  },
  infoSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...Typography.headlineSm,
    fontSize: 18,
    marginBottom: 8,
    color: Colors.onSurface,
  },
  description: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    lineHeight: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 32,
    backgroundColor: Colors.surfaceContainerLowest,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrayBorder,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginRight: 16,
  },
  qtyButton: {
    padding: 4,
  },
  qtyText: {
    ...Typography.headlineSm,
    marginHorizontal: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: Colors.primaryContainer,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    ...Typography.buttonText,
    color: Colors.onError,
    fontSize: 16,
  },
});
