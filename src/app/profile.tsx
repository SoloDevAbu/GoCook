import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen (Dummy)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.onSurface,
  },
});
