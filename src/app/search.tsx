import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen (Dummy)</Text>
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
