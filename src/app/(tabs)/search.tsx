import { StatusBar } from "expo-status-bar";
import { View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Search() {
  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <View className="flex flex-row items-center bg-[#333] p-1 rounded-lg mt-5">
        <EvilIcons name="search" size={24} color="white" />
        <TextInput
          className="bg-[#333] text-white p-2 rounded-lg w-full"
          placeholder="Search News. Videos & Memes"
          placeholderTextColor="#888"
        />
      </View>
    </SafeAreaView>
  );
}
