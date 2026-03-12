import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";


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
      <TextInput placeholder="Email" />
      <ActivityIndicator size={"large"} />
      <Link href={"/about"}>About Page</Link>
      <Button title="Navigate" onPress={() => router.push("/about")}></Button>
    </View>
  );
}

const router = useRouter();

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