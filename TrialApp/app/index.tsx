import { Text, View, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";


export default function Index() {
  return (
    <View style={styles.container}>

      <Text>Hello World</Text>

      <Image 
        source={{
          uri: "https://www.shutterstock.com/image-vector/hand-drawn-cartoon-malatang-illustration-260nw-2132309287.jpg",
        }}
        style={styles.image}
      />

        <TextInput placeholder="Email"/>

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