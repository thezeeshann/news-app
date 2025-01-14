import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSinglePost } from "@/src/lib/api/post";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SinglePost() {
  const { postId } = useLocalSearchParams();
  const [singlePost, setSinglePost] = useState();

  console.log("post-id", postId);

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        if (!postId) {
          console.warn("Invalid postId");
          return;
        }
        console.log(`Fetching post with ID: ${postId}`);
        const data = await getSinglePost(postId);
        setSinglePost(data);
        console.log("Single post data:", data);
      } catch (error) {
        console.error("Error fetching single post:", error);
      }
    };

    fetchSingleData();
  }, [postId]);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="auto" />
      <ScrollView>
        <View className="border-2 border-red-500">
          <Image source={{ uri: singlePost?.image }} className="h-60 w-60" />
          <Text className="p-2 text-xl font-bold text-white">
            {singlePost?.title}
          </Text>
          <Text className="p-2 text-lg text-gray-400">
            {singlePost?.content}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between border-2 border-red-500">
          <View>
            <Text className="text-white">India.com</Text>
            <Text className="text-white">1.4 Miilons</Text>
          </View>
          <View className="px-4 py-2 bg-white">
            <Text className="text-black">Follow</Text>
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-lg font-bold text-white">Comments 16</Text>
          <View className="flex flex-row items-center border-2 border-red-500 gap-x-2">
            <Image
              className="rounded-full w-14 h-14"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/715/447/HD-wallpaper-muhammad-ali-boxing-fight-mma-ufc-thumbnail.jpg",
              }}
            />
            {/* <CustomTextInput name="comment" placeholder="Add a comment" /> */}
            <TextInput
              placeholder="Add a comment"
              className="bg-gray-600 placeholder:text-white"
            />
          </View>

          <View>
            <View className="flex flex-row items-center border-2 border-red-500 ">
              <Image
                className="rounded-full w-14 h-14"
                source={{
                  uri: "https://w0.peakpx.com/wallpaper/715/447/HD-wallpaper-muhammad-ali-boxing-fight-mma-ufc-thumbnail.jpg",
                }}
              />
              <Text className="text-sm text-white">User Name 1</Text>
              <Text className="text-sm text-gray-400">10 min ago</Text>
            </View>
          </View>
        </View>

        <View className="mt-2 border-2 border-red-500">
          <Text className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sapiente consequuntur expedita exercitationem quae hic excepturi
            provident sit nisi nobis.
          </Text>
          <View className="flex flex-row items-center justify-between border-2 border-red-500">
            <View className="flex flex-row items-center gap-x-4">
              <AntDesign name="like2" size={24} color="white" />
              <AntDesign name="dislike2" size={24} color="white" />
            </View>
            <View className="px-4 py-2 bg-gray-500">
              <Text className="text-white">Reply</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
