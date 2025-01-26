import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import { getCommentByUser } from "../lib/api/comment";

export default function Activty() {
  const { userData } = useContext(AppContext);
  const { token, existUser } = userData || {};
  const [commentsByUser, setCommentsByUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (existUser && token) {
        try {
          const data = await getCommentByUser(token);
          setCommentsByUser(data);
        } catch (error) {
          console.error("get comments by user error:", error);
        }
      }
    };
    fetchData();
  }, [existUser, token]);

  return (
    <View className="my-6">
      {commentsByUser && commentsByUser.length > 0 ? (
        commentsByUser?.map((comment) => (
          <View
            key={comment?.id}
            className="border-gray-500 border-[2px] p-2 mb-3"
          >
            <View className="flex flex-row items-center justify-between px-2 ">
              <View className="flex flex-row items-center gap-x-2">
                <Image
                  source={{
                    uri: comment?.user?.profile,
                  }}
                  className="w-16 h-16 rounded-full"
                />
                <Text className="text-lg text-white">
                  {comment?.user?.fullName}
                </Text>
              </View>
              <FontAwesome name="trash-o" size={24} color="white" />
            </View>
            <Text className="px-2 mt-2 text-white">{comment?.title}</Text>
          </View>
        ))
      ) : (
        <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
          <MaterialIcons name="local-activity" size={40} color="white" />
          <View className="flex flex-col items-center justify-center">
            <Text className="text-center text-white">
              You have not found any of
            </Text>
            <Text className="text-center text-white">your activity</Text>
          </View>
          <TouchableOpacity className="px-6 py-3 border-2 border-white">
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
