import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image } from "react-native";
import CustomTextInput from "@/src/components/custom-text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { postType, postSchema } from "@/src/lib/schema/post";
import { createPost } from "@/src/lib/api/post";
import { getDataFromStore } from "@/src/lib/store";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function CreatePost() {
  const [imageUri, setImageUri] = useState<string>();

  const form = useForm<postType>({
    resolver: zodResolver(postSchema),
  });

  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const onSubmit: SubmitHandler<postType> = async (data) => {
    const token = await getDataFromStore("authToken");
    const existUser = await getDataFromStore("existUser");
    if (!token && !existUser) {
      router.navigate("/signin");
    }
    try {
      const formData = new FormData();

      formData.append("title", data.title || "");
      formData.append("content", data.content || "");
      formData.append("authorId", existUser.id);

      if (imageUri) {
        const fileName = imageUri.split("/").pop();
        const match = /\.(\w+)$/.exec(fileName || "");
        const type = match ? `image/${match[1]}` : `image`;

        formData.append("image", {
          uri: imageUri,
          name: fileName,
          type,
        } as any);
      }
      const response = await createPost(formData, token);
      if (response.status === 201) {
        router.navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="h-full px-4 pt-4  bg-[#27272a]">
      <StatusBar style="light" />
      <View>
        <Text className="mt-5 font-semibold text-center text-white">
          Create Post
        </Text>
      </View>
      <FormProvider {...form}>
        <View className="flex flex-col">
          <CustomTextInput
            name="title"
            label="Title"
            placeholder="Enter Title"
            className="placeholder:text-white"
          />
          <CustomTextInput
            name="content"
            label="Content"
            placeholder="Content"
            className="placeholder:text-white"
          />
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginVertical: 10,
              }}
            />
          )}

          <TouchableOpacity
            onPress={handleChooseImage}
            className="px-4 py-2 border-[1px] border-white  w-full mx-auto"
          >
            <Text className="text-center text-white">Choose Image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={form.handleSubmit(onSubmit)}
          className="px-4 py-2 mt-5 border-[1px] border-white rounded-full w-72 mx-auto"
        >
          <Text className="text-center text-white">Post</Text>
        </TouchableOpacity>
      </FormProvider>
    </View>
  );
}
