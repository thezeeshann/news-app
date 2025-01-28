import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TextInput, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useContext } from "react";
import { AppContext } from "@/src/context/app-context";
import { useDebounce } from "@/src/lib/hook";
import { Link } from "expo-router";
import { PostType } from "@/src/lib/types";

export default function Search() {
  const [results, setResults] = useState<PostType[]>([]);
  const [seachQuery, setSearchQuery] = useState("");
  const { postData } = useContext(AppContext);
  const debouncedValue = useDebounce(seachQuery);

  useEffect(() => {
    if (debouncedValue && postData) {
      const filteredData = postData.filter((item) =>
        item.title?.toLowerCase().includes(debouncedValue.toLowerCase()),
      );
      setResults(filteredData);
    } else {
      setResults([]);
    }
  }, [debouncedValue, postData]);

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <View className="flex flex-row items-center bg-[#333333] p-1 rounded-lg mt-5">
        <EvilIcons name="search" size={24} color="white" />
        <TextInput
          value={seachQuery}
          onChangeText={setSearchQuery}
          className="bg-[#333] text-white p-2 rounded-lg w-full"
          placeholder="Search News. Videos & Memes"
          placeholderTextColor="#888"
        />
      </View>
      {results && (
        <View
          className={`${seachQuery ? "bg-[#333333]" : ""}  w-full p-2 mt-2 `}
        >
          {results?.map((result) => (
            <Link href={`/post/${result.id}`} key={result.id}>
              <View className="flex flex-row items-center justify-between w-full">
                <Text className="font-semibold text-white">{result.title}</Text>
                <Image
                  source={{ uri: result.image }}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            </Link>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}
