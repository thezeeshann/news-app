import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
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
      <View className="flex flex-col mt-10 gap-y-4">
        <TextInput
          placeholder="Enter email address"
          className="border-red-500 border-[1px] placeholder:text-white"
        />
        <TextInput
          placeholder="Enter Password"
          className="border-red-500 border-[1px] placeholder:text-white"
        />
      </View>
      <TouchableOpacity className="px-4 py-2 mt-5 border-[1px] border-white rounded-full w-72 mx-auto">
        <Text className="text-center text-white">Sing In</Text>
      </TouchableOpacity>
      <Link href={"/auth/signup"} asChild>
        <Text className="mt-5 text-center text-white">
          Don't have account sing up here
        </Text>
      </Link>
    </View>
  );
}
