import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSinglePost } from "@/src/lib/api/post";
import { useContext, useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import CustomTextInput from "@/src/components/custom-text-input";
import { commentSchema, commentType } from "@/src/lib/schema/comment";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createComment } from "@/src/lib/api/comment";
import { getDataFromStore, storeDataInStore } from "@/src/lib/store";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AppContext } from "@/src/context/app-context";

export default function SinglePost() {
  const { postId } = useLocalSearchParams();
  const [singlePost, setSinglePost] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const { userData } = useContext(AppContext);
  const { token, existUser } = userData || {};

  const form = useForm<commentType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      title: "",
      postId: postId as string,
    },
  });

  const checkIfPostIsSaved = async () => {
    const savedPosts = await getDataFromStore("savedPosts");
    setIsSaved(savedPosts.includes(postId));
  };

  const handleSavePost = async () => {
    if (!token || !existUser) {
      router.push("/signin");
      return;
    }

    const savedPosts = await getDataFromStore("savedPosts");
    let newSavedPosts;

    if (isSaved) {
      newSavedPosts = savedPosts.filter((id: string) => id !== postId);
    } else {
      newSavedPosts = [...savedPosts, postId];
      console.log("Post saved successfully");
    }

    await storeDataInStore("savedPosts", newSavedPosts);
    setIsSaved(!isSaved);
  };

  const onSubmit: SubmitHandler<commentType> = async (data) => {
    if (!token && !existUser) {
      router.navigate("/signin");
    }
    try {
      const commentData = {
        ...data,
        postId: postId as string,
      };

      const comment = await createComment(commentData, token);
      console.log("Comment created:", comment);
      data.title = "";
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  useEffect(() => {
    checkIfPostIsSaved();

    const fetchSingleData = async () => {
      try {
        if (!postId) {
          console.warn("Invalid postId");
          return;
        }
        const data = await getSinglePost(postId);
        setSinglePost(data);
      } catch (error) {
        console.error("Error fetching single post:", error);
      }
    };

    fetchSingleData();
  }, [postId]);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full ">
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
          <Image source={{ uri: singlePost?.image }} className="w-full h-80" />
          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="p-2 text-xl font-bold text-white">
              {singlePost?.title}
            </Text>
            {isSaved ? (
              <FontAwesome
                onPress={handleSavePost}
                name="bookmark"
                size={24}
                color="white"
              />
            ) : (
              <Feather
                onPress={handleSavePost}
                name="bookmark"
                size={24}
                color="white"
              />
            )}
          </View>
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

        <View className="mt-5 ">
          <Text className="text-lg font-bold text-white">Comments 2</Text>
          <View className="flex flex-row items-center justify-between mt-5 border-2 border-red-500 gap-x-2">
            <Image
              className="border-2 border-red-500 rounded-full w-14 h-14"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/715/447/HD-wallpaper-muhammad-ali-boxing-fight-mma-ufc-thumbnail.jpg",
              }}
            />

            <FormProvider {...form}>
              <CustomTextInput
                name="title"
                placeholder="Add a comment"
                className="placeholder:text-white w-[50%]"
              />
              <TouchableOpacity
                onPress={form.handleSubmit(onSubmit)}
                className="px-4 py-2 bg-gray-500 border-2 border-red-500"
              >
                <Text className="text-white">Reply</Text>
              </TouchableOpacity>
            </FormProvider>
          </View>
        </View>

        {singlePost?.comments?.map((comment) => (
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
