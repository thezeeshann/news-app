import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewCard from "@/src/components/new-card";
import { getPost } from "@/src/lib/api/post";
import { useEffect, useState } from "react";

export default function App() {
  const [postData, setPostData] = useState();

  console.log(postData);

  useEffect(() => {
    const postData = async () => {
      try {
        const data = await getPost();
        setPostData(data);
      } catch (error) {
        console.log("something went wrong while fetching post data", error);
      }
    };

    postData();
  }, []);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <FlatList
        data={postData}
        renderItem={({ item }) => <NewCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
