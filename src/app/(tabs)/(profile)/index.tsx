import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataFromStore, removeDataFromStore } from "@/src/lib/store";
import { useEffect, useState } from "react";
import { signupType } from "@/src/lib/schema/signup";

export default function Profile() {
  const [userData, setUserData] = useState<signupType | null>();
  const [token, setToken] = useState();

  useEffect(() => {
    const retrieveAuthData = async () => {
      const token = await getDataFromStore("authToken");
      const userInfo = await getDataFromStore("existUser");
      if (token && userInfo) {
        setToken(token);
        setUserData(userInfo);
        return;
      }
    };
    retrieveAuthData();
  }, []);

  const handleLogout = async () => {
    await removeDataFromStore("authToken");
    await removeDataFromStore("existUser");
    setToken(undefined);
    setUserData(undefined);
    console.log("Logout successfully completed");
  };

  return (
    <SafeAreaView className="h-full px-4 bg-black">
      <StatusBar style="light" />
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2">
          {userData && token ? (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              source={{
                uri: userData.profile,
              }}
            />
          ) : (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              source={require("../../../../assets/person2.webp")}
            />
          )}

          <View className="flex flex-col">
            <Text className="font-bold text-white">
              {userData ? userData.fullName : "Add you name"}
            </Text>
            <Text className="text-white">
              @{userData ? userData.username : "Add your username"}
            </Text>
            <Text className="text-white">0 Following</Text>
          </View>
        </View>

        {token && userData ? (
          <TouchableOpacity
            onPress={handleLogout}
            className="px-4 py-1 border-2 border-white"
          >
            <Text className="text-white">Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => router.push("/auth/signin")}
            className="px-4 py-1 border-2 border-white"
          >
            <Text className="text-white">Log in</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="w-full h-[2px] mt-8 bg-gray-600" />
      <View className="flex flex-row items-center mt-5 gap-x-4">
        <View>
          <Text className="text-lg font-bold text-white">My Post</Text>
          <View className="w-full h-[2px] mt-2 bg-white" />
        </View>

        <View>
          <Text className="text-lg font-bold text-white">Saved</Text>
          <View className="w-full h-[2px] mt-2 bg-white" />
        </View>

        <View>
          <Text className="text-lg font-bold text-white">Activity</Text>
          <View className="w-full h-[2px] mt-2 bg-white" />
        </View>

        <View className="-space-y-4">
          <Text className="text-lg font-bold text-white">History</Text>
          <View className="w-full h-[2px] mt-2 bg-white" />
        </View>
      </View>
    </SafeAreaView>
  );
}
