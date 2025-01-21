import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataFromStore, removeDataFromStore } from "@/src/lib/store";
import { useEffect, useState } from "react";
import { signupType } from "@/src/lib/schema/signup";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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

        <TouchableOpacity onPress={() => setTabName("history")}>
          <Text
            className={` ${tabName === "history" ? "text-white" : "text-[#737373]"} text-lg font-bold `}
          >
            History
          </Text>
          {tabName === "history" ? (
            <View className="w-full h-[2px] mt-2 bg-white" />
          ) : (
            <View className="w-full h-[2px] mt-2 bg-black" />
          )}
        </TouchableOpacity>
      </View>

      {tabName === "mypost" && (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <MaterialIcons name="create-new-folder" size={40} color="white" />
          <View>
            <Text className="text-white">You have not posted</Text>
            <Text className="text-white">anything for a while</Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Create a post</Text>
          </TouchableOpacity>
        </View>
      )}

      {tabName === "saved" && (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <AntDesign name="inbox" size={40} color="white" className="" />
          <View>
            <Text className="text-white">You have not saved</Text>
            <Text className="text-white">anything yet</Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
        </View>
      )}

      {tabName === "activity" && (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <MaterialIcons name="local-activity" size={40} color="white" />
          <View className="flex flex-col items-center">
            <Text className="text-white">You have not found any of</Text>
            <Text className="text-white">your activity</Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
        </View>
      )}

      {tabName === "history" && (
        <View className="mt-5">
          <View className="flex flex-row items-center w-24 px-4 py-1 border-2 border-white">
            <Text className="text-white">Clear</Text>
            <MaterialIcons name="delete" size={24} color="white" />
          </View>

          <Text className="mt-3 text-white">20 jan, 2025</Text>

          <View className="flex flex-row items-center justify-between mt-4">
            <Image
              className="w-12 h-12"
              source={require("../../../../assets/person2.webp")}
            />
            <Text className="text-white ">
              Saif Ali Khan Attack News Live Updates: Bandra court sends
              Bangladeshi man arrested for stabbing actor to
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
