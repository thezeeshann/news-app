import { View, Text, Image, TouchableOpacity } from "react-native";
import { AppContext } from "../context/app-context";
import { useContext, useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { getPostByUser } from "../lib/api/post";
import { deletePost } from "../lib/api/post";

export default function ManagePost() {
  const { userData } = useContext(AppContext);
  const { token, existUser } = userData || {};
  const [postsByUser, setPostsByUser] = useState([]);

  const handleDeletePost = async (postId) => {
    try {
      const response = await deletePost(postId);
      if (response.status === 200) {
        setPostsByUser(postsByUser.filter((p) => p.id !== post.id));
      } else {
        console.error("Delete post failed:", response);
      }
    } catch (error) {
      console.error("delete post error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (existUser && token) {
        try {
          const data = await getPostByUser(token);
          setPostsByUser(data);
        } catch (error) {
          console.error("get post by user error:", error);
        }
      }
    };
    fetchData();
  }, [existUser, token]);

  return (
    <View className="mt-5">
      {token && existUser ? (
        postsByUser?.data?.map((post) => (
          <View
            key={post.id}
            className="flex border-gray-500 border-[2px]   flex-row items-center justify-start my-2 gap-x-2"
          >
            <Image
              source={{
                uri: post.image,
              }}
              className="w-16 h-16 "
            />
            <View className="flex flex-col gap-y-1">
              <Text className="text-white">{post.title}</Text>
              <View className="flex flex-row gap-x-4">
                <FontAwesome
                  onPress={() => handleDeletePost(post.id)}
                  name="trash-o"
                  size={24}
                  color="white"
                />
                <Feather name="edit" size={24} color="white" />
              </View>
            </View>
          </View>
        ))
      ) : (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <MaterialCommunityIcons name="file-edit" size={40} color="white" />
          <View className="flex flex-col items-center justify-center">
            <Text className="text-center text-white">
              Login to manage your post
            </Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
