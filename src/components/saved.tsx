import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getDataFromStore } from "../lib/store";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import { PostType } from "../lib/types";

export default function Saved() {
  const { userData } = useContext(AppContext);
  const { token, existUser } = userData || {};
  const [savedPosts, setSavePost] = useState<PostType[]>([]);

  const getSavePost = async () => {
    try {
      const savedData = await getDataFromStore("savedPosts");
      setSavePost(savedData);
      console.log(savedData);
    } catch (error) {
      console.error("Error getting saved posts", error);
    }
  };

  useEffect(() => {
    getSavePost();
  }, []);

  return (
    <View className="px-2 my-6">
      {token && existUser && savedPosts.length > 0 ? (
        savedPosts?.map((post) => (
          <View
            key={post.id}
            className="flex border-[2px] flex-row items-start justify-start border-gray-500 gap-x-2"
          >
            <Image
              source={{
                uri: post.image,
              }}
              className="w-16 h-16"
            />
            <View className="flex flex-col">
              <Text className="text-white">{post.title}</Text>
              <View className="flex flex-row items-center mt-1 gap-x-2">
                <Image
                  source={{
                    uri: post?.author?.profile,
                  }}
                  className="w-6 h-6 rounded"
                />
                <Text className="text-white">{post?.author?.fullName}</Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <AntDesign name="inbox" size={40} color="white" className="" />
          <View>
            <Text className="text-center text-white">You have not saved</Text>
            <Text className="text-center text-white">anything yet</Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
