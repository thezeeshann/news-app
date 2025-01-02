import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Signin() {
  return (
    <View className="h-full px-4 pt-4 border-2 border-red-500 bg-[#27272a]">
      <StatusBar style="light" />
      <View>
        <Text className="mt-5 font-semibold text-center text-white">
          Get personalised News and Viedos for you, anytime & anywhere
        </Text>
        <View className="flex flex-row items-center justify-center p-2 mt-2 gap-x-1">
          <MaterialIcons name="people-alt" size={28} color="white" />
          <Ionicons name="people" size={28} color="white" />
          <MaterialIcons name="people-alt" size={28} color="white" />
          <Ionicons name="people" size={28} color="white" />
        </View>
      </View>
      <View className="flex flex-col mt-10 space-y-4">
        <TextInput
          placeholder="Enter email address"
          className="border-red-500 border-[1px] placeholder:text-white"
        />
        <TextInput
          placeholder="Enter Password"
          className="border-red-500 border-[1px] placeholder:text-white"
        />
      </View>
    </View>
  );
}
