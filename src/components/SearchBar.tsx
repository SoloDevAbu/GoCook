import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../constants/Colors';

export function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color={Colors.outline} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for fresh ingredients..."
        placeholderTextColor={Colors.outline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBackground,
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    ...Typography.bodyMd,
    color: Colors.onSurface,
    height: '100%',
  },
});
