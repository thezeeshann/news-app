import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSinglePost } from "@/src/lib/api/post";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function SinglePost() {
  const { postId } = useLocalSearchParams();
  const [singlePost, setSinglePost] = useState();

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
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="">
          <Image source={{ uri: singlePost?.image }} className="h-60 w-60" />
          <Text className="p-2 text-xl font-bold text-white">
            {singlePost?.title}
          </Text>
          <Text className="p-2 text-lg text-gray-400">
            {singlePost?.content}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between mt-5">
          <View>
            <Text className="text-white">{singlePost?.author?.fullName}</Text>
            <Text className="text-white">1.4 Miilons</Text>
          </View>
          <View className="px-4 py-2 bg-white">
            <Text className="text-black">Follow</Text>
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-lg font-bold text-white">Comments 2</Text>
          <View className="flex flex-row items-center mt-5 gap-x-2">
            <Image
              className="rounded-full w-14 h-14"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/715/447/HD-wallpaper-muhammad-ali-boxing-fight-mma-ufc-thumbnail.jpg",
              }}
            />
            {/* <CustomTextInput name="comment" placeholder="Add a comment" /> */}
            <TextInput
              placeholder="Add a comment"
              className="w-full text-white bg-gray-600 rounded text-whtie"
            />
          </View>
        </View>

        {singlePost?.comments.map((comment) => (
          <View key={comment.id} className="flex flex-col py-2 mt-3 gap-y-2">
            <View className="flex flex-row items-center justify-between ">
              <View className="flex flex-row items-start gap-x-4">
                <Image
                  className="border-2 border-white rounded-full w-14 h-14"
                  source={{
                    uri: "https://w0.peakpx.com/wallpaper/715/447/HD-wallpaper-muhammad-ali-boxing-fight-mma-ufc-thumbnail.jpg",
                  }}
                />
                <View className="flex flex-col items-center gap-x-2">
                  <Text className="text-lg font-semibold text-white ">
                    {comment?.user?.fullName}
                  </Text>
                  <Text className="text-sm text-gray-400">10 min ago</Text>
                </View>
              </View>

              <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
            <View>
              <Text className="text-white">{comment.title}</Text>
              <View className="flex flex-row items-center justify-between mt-3">
                <View className="flex flex-row items-center gap-x-4">
                  <AntDesign name="like2" size={24} color="white" />
                  <AntDesign name="dislike2" size={24} color="white" />
                </View>
                <View className="px-4 py-2 bg-gray-500">
                  <Text className="text-white">Reply</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
