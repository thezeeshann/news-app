import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataFromStore } from "@/src/lib/store";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState();
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
      console.log("Token", token);
      console.log("User", userInfo);
    };

    retrieveAuthData();
  }, []);

  return (
    <SafeAreaView className="h-full px-4 bg-black">
      <StatusBar style="light" />
      <View className="flex flex-row items-center justify-between ">
        <View className="flex flex-row items-center ">
          <Image
            className="w-[80px] h-[80px] rounded-full"
            source={{
              uri: userData
                ? userData.profile
                : "../../../../assets/person2.webp",
            }}
          />
          <View className="flex flex-col">
            <Text className="font-bold text-white">
              {userData ? userData.fullName : "Add you name"}
            </Text>
            <Text className="text-white">
              {userData ? userData.username : "Add your username"}
            </Text>
            <Text className="text-white">0 Following</Text>
          </View>
        </View>

        {token && userData ? (
          <TouchableOpacity
            onPress={() => {
              setToken(undefined);
              setUserData(undefined);
            }}
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
    </SafeAreaView>
  );
}
