import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewCard from "@/src/components/new-card";
import { AppContext } from "@/src/context/app-context";
import { useContext } from "react";

export default function App() {
  const { postData, comments } = useContext(AppContext);

  console.log(comments);

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
