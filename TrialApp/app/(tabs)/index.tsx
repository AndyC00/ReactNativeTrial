import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Platform,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Button as AndroidComposeButton } from "@expo/ui/jetpack-compose";


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
      {Platform.OS === "android" ? (
        <AndroidComposeButton onPress={() => router.push("/about")} variant="elevated">
          Navigate
        </AndroidComposeButton>
      ) : (
        <Pressable
          onPress={() => router.push("/about")}
          style={({ pressed }) => [
            styles.fallbackButton,
            pressed && styles.fallbackButtonPressed,
          ]}
        >
          <Text style={styles.fallbackButtonText}>Navigate</Text>
        </Pressable>
      )}
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
    height: 190,
  },
  fallbackButton: {
    marginTop: 12,
    backgroundColor: "#0A7EA4",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  fallbackButtonPressed: {
    opacity: 0.8,
  },
  fallbackButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
