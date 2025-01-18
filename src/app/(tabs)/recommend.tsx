import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Recommend() {
  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <View className="border-2 border-red-500">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-bold text-white">
              Recommended Hash Tags
            </Text>
            <Text className="text-gray-300">Recommended Hash Tags</Text>
          </View>
          <EvilIcons name="search" size={24} color="white" />
        </View>
        <ScrollView>
          <View>
            <Image
              className="w-16 h-16"
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
            <Text className="text-white">Sports</Text>
            <Text className="text-white">Follow</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
