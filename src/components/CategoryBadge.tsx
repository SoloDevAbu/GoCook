import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../constants/Colors';

export function CategoryBadge({
  name,
  icon,
}: {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={32} color={Colors.onSurfaceVariant} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: Colors.surfaceContainerHighest,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  text: {
    ...Typography.labelMd,
    color: Colors.onSurfaceVariant,
  },
});
