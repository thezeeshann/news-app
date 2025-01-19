import { FlatList, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewCard from "@/src/components/new-card";
import { AppContext } from "@/src/context/app-context";
import { useContext } from "react";

export default function App() {
  const { postData, comments } = useContext(AppContext);

  console.log(comments);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <FlatList
        data={postData}
        renderItem={({ item }) => <NewCard item={item} />}
        keyExtractor={(item) => item.id}
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
