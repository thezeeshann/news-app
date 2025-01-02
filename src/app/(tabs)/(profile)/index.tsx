import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="h-full px-4 bg-black">
      <StatusBar style="light" />
      <View className="flex flex-row items-center justify-between ">
        <View className="flex flex-row items-center ">
          <Image
            className="w-[100px] h-[100px]"
            source={require("../../../../assets/person2.webp")}
          />
          <View className="flex flex-col">
            <Text className="font-bold text-white">Add you name</Text>
            <Text className="text-white">Add your username</Text>
            <Text className="text-white">0 Following</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/auth/signin")}
          className="px-4 py-1 border-2 border-white"
        >
          <Text className="text-white">Log in</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}></ScrollView> */}
    </SafeAreaView>
  );
}
