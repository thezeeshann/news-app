import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  recommendedHashTags,
  mostPopularNews,
  recommendedSources,
} from "@/src/lib/data";
import RecommendedHeadline from "@/src/components/recommended-headline";

export default function Recommend() {
  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="mb-8">
          <RecommendedHeadline
            description="Recommended Hash Tags"
            headline="Recommended Hash Tags"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View className="flex flex-row items-center gap-x-4">
              {recommendedHashTags.map((tag) => (
                <View
                  key={tag.id}
                  className="flex flex-col items-center mt-2 gap-y-3 w-max"
                >
                  <Image
                    className="h-36 w-36"
                    source={{
                      uri: tag.image,
                    }}
                  />
                  <Text className="text-white">{tag.name}</Text>
                  <Text className="w-full px-4 py-2 text-center text-black bg-white">
                    Follow
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View className="w-[100%] h-[1px] my-8 bg-[#737373]" />

          <RecommendedHeadline
            description="Most popular in News"
            headline="Most popular in News"
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View className="flex flex-row items-center gap-x-4">
              {recommendedSources.map((tag) => (
                <View
                  key={tag.id}
                  className="flex flex-col items-center mt-2 gap-y-3 w-max"
                >
                  <Image
                    className="w-24 h-24"
                    source={{
                      uri: tag.image,
                    }}
                  />
                  <Text className="text-white">{tag.title}</Text>
                  <Text className="w-full px-4 py-2 text-center text-black bg-white">
                    Follow
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View className="w-[100%] h-[1px] my-8 bg-[#737373]" />

          <RecommendedHeadline
            description="Most popular in News"
            headline="Most popular in News"
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View className="flex flex-row items-center gap-x-4">
              {mostPopularNews.map((tag) => (
                <View
                  key={tag.id}
                  className="flex flex-col items-center mt-2 gap-y-3 w-max"
                >
                  <Image
                    className="w-28 h-28"
                    source={{
                      uri: tag.image,
                    }}
                  />
                  <Text className="text-white">{tag.title}</Text>
                  <Text className="w-full px-4 py-2 text-center text-black bg-white">
                    Follow
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
