import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";


export default function Content() {
  return (
    <View style={styles.container}>
      <Text>Cotent Page</Text>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 190
  }
});