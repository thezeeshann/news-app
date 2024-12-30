import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Premium() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-red-500">
        Open up App.tsx to start working on your app!
      </Text>
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