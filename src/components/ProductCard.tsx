import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../constants/Colors';
import { Link } from 'expo-router';

export function ProductCard({ item }: { item: any }) {
  return (
    <Link href={`/product/${item.id}`} asChild>
      <Pressable style={styles.card}>
        {item.badge && (
          <View
            style={[
              styles.badge,
              item.badge === 'Low Stock' ? styles.badgeError : styles.badgeNew,
            ]}>
            <Text
              style={[
                styles.badgeText,
                item.badge === 'Low Stock' ? styles.badgeTextError : styles.badgeTextNew,
              ]}>
              {item.badge}
            </Text>
          </View>
        )}
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>
              ₹{item.price} <Text style={styles.unit}>/ {item.unit}</Text>
            </Text>
            <Pressable style={styles.addButton}>
              <MaterialIcons name="add" size={20} color={Colors.onSecondary} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.lightGrayBorder,
    overflow: 'hidden',
    flex: 1,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
    minHeight: 250,
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeError: {
    backgroundColor: Colors.error,
  },
  badgeNew: {
    backgroundColor: Colors.primaryContainer,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  badgeTextError: {
    color: Colors.onError,
  },
  badgeTextNew: {
    color: Colors.onPrimaryContainer,
  },
  imageContainer: {
    height: 128,
    backgroundColor: Colors.surfaceVariant,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.bodyLg,
    color: Colors.onSurface,
    marginBottom: 4,
  },
  description: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  price: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
  },
  unit: {
    ...Typography.bodyMd,
    color: Colors.outline,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E67E22', // secondary accent color
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});
