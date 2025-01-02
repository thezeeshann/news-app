import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//(tabs)/profile/auth/signin
export default function Signup() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-red-500">sign up</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
