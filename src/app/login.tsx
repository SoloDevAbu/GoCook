import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Colors, Typography } from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="local-shipping" size={48} color={Colors.primary} />
          </View>
          <Text style={styles.title}>Welcome to GoCook</Text>
          <Text style={styles.subtitle}>Fresh ingredients delivered in minutes</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneInput}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                placeholderTextColor={Colors.outline}
              />
            </View>
          </View>

          <Pressable style={styles.button} onPress={() => router.push('/')}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{' '}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surfaceContainerLowest,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 64,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.bodyLg,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    ...Typography.labelMd,
    color: Colors.onSurfaceVariant,
    marginBottom: 8,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGrayBorder,
    borderRadius: 12,
    backgroundColor: Colors.surfaceContainerLowest,
    height: 56,
    paddingHorizontal: 16,
  },
  countryCode: {
    ...Typography.bodyLg,
    color: Colors.onSurface,
    marginRight: 12,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    ...Typography.bodyLg,
    color: Colors.onSurface,
    height: '100%',
  },
  button: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: 12,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...Typography.buttonText,
    color: Colors.onError,
    fontSize: 16,
  },
  footer: {
    marginBottom: 24,
  },
  footerText: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
