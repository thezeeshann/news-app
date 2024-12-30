import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import NewCard from "@/src/components/new-card";

export default function App() {
  return (
    <SafeAreaView className=" h-full bg-[#27272a] px-4 pt-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </ScrollView>
    </SafeAreaView>
  );
}
