import { StatusBar } from "expo-status-bar";
import { Image, Text, View, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "@/src/context/app-context";
import { useContext } from "react";

export default function TopNews() {
  const { postData } = useContext(AppContext);

  console.log(postData, "in top news");

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <ScrollView>
        <FlatList
          data={postData}
          renderItem={({ item }) => (
            <View>
              <Image
                className="h-60 w-60"
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
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
