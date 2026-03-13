import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Button } from "@expo/ui/swift-ui";


export default function Index() {
  const router = useRouter();

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
      <Button onPress={() => router.push("/about")}>
        <Text>Navigate</Text>
      </Button>
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