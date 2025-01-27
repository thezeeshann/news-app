import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataFromStore, removeDataFromStore } from "@/src/lib/store";
import { useEffect, useState } from "react";
import { signupType } from "@/src/lib/schema/signup";
import MyPost from "@/src/components/my-post";
import Saved from "@/src/components/saved";
import Activty from "@/src/components/activity";
import ManagePost from "@/src/components/manage-post";

export default function Profile() {
  const [userData, setUserData] = useState<signupType | null>();
  const [token, setToken] = useState();
  const [tabName, setTabName] = useState("mypost");

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
            <Text className="text-lg font-bold text-white">
              {userData ? userData.fullName : "Add you name"}
            </Text>
            <Text className="text-white">
              @{userData ? userData.username : "Add your username"}
            </Text>
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
            onPress={() => router.push("/signin")}
            className="px-4 py-1 border-2 border-white"
          >
            <Text className="text-white">Log in</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="w-full h-[2px] mt-8 bg-gray-600" />
      <View className="flex flex-row items-center mt-5 gap-x-4">
        <TouchableOpacity onPress={() => setTabName("mypost")}>
          <Text
            className={` ${tabName === "mypost" ? "text-white" : "text-[#737373]"} text-lg font-bold `}
          >
            My Post
          </Text>
          {tabName === "mypost" ? (
            <View className="w-full h-[2px] mt-2 bg-white" />
          ) : (
            <View className="w-full h-[2px] mt-2 bg-black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTabName("saved")}>
          <Text
            className={` ${tabName === "saved" ? "text-white" : "text-[#737373]"} text-lg font-bold `}
          >
            Saved
          </Text>
          {tabName === "saved" ? (
            <View className="w-full h-[2px] mt-2 bg-white" />
          ) : (
            <View className="w-full h-[2px] mt-2 bg-black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTabName("activity")}>
          <Text
            className={` ${tabName === "activity" ? "text-white" : "text-[#737373]"} text-lg font-bold `}
          >
            Activity
          </Text>
          {tabName === "activity" ? (
            <View className="w-full h-[2px] mt-2 bg-white" />
          ) : (
            <View className="w-full h-[2px] mt-2 bg-black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTabName("managepost")}>
          <Text
            className={` ${tabName === "managepost" ? "text-white" : "text-[#737373]"} text-lg font-bold `}
          >
            Manage Post
          </Text>
          {tabName === "managepost" ? (
            <View className="w-full h-[2px] mt-2 bg-white" />
          ) : (
            <View className="w-full h-[2px] mt-2 bg-black" />
          )}
        </TouchableOpacity>
      </View>

      {tabName === "mypost" && <MyPost />}

      {tabName === "saved" && <Saved />}

      {tabName === "activity" && <Activty />}

      {tabName === "managepost" && <ManagePost />}
    </SafeAreaView>
  );
}
