import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewCard from "@/src/components/new-card";

export default function App() {
  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <NewCard />
        <NewCard />
      </ScrollView>
    </SafeAreaView>
  );
}
