import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getPostByUser } from "../lib/api/post";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import NewCard from "./new-card";

export default function MyPost() {
  const { userData } = useContext(AppContext);
  const { token, existUser } = userData || {};
  const [postsByUser, setPostsByUser] = useState([]);

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className="pt-6 "
    >
      {postsByUser && postsByUser.count > 0 ? (
        postsByUser?.data?.map((post) => <NewCard key={post.id} item={post} />)
      ) : (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <MaterialIcons name="create-new-folder" size={40} color="white" />
          <View>
            <Text className="text-white">You have not posted</Text>
            <Text className="text-white">anything for a while</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/create-post")}
            className="px-6 py-3 border-2 border-white"
          >
            <Text className="text-white">Create a post</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
