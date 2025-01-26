import { Image, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "@/src/context/app-context";
import { useContext } from "react";

export default function TopNews() {
  const { postData } = useContext(AppContext);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image
              className="w-full h-80"
              source={{
                uri: item.image,
              }}
            />
            <Text className="p-2 text-xl font-bold text-white">
              {item.title}
            </Text>
            <Text className="p-2 text-lg text-gray-400">{item.content}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View className="flex items-center justify-center mt-10">
            <Text className="font-semibold text-white ">
              No posts available.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
