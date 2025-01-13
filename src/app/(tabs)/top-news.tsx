import { StatusBar } from "expo-status-bar";
import { Image, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import { getPost } from "@/src/lib/api/post";

export default function TopNews() {
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <ScrollView>
        <View>
          <Image
            className="h-60 w-60"
            source={{
              uri: "https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
            }}
          />
          <Text className="p-2 text-xl font-bold text-white">
            Elon Reeve Musk is a businessman known for his key roles in the
            space company SpaceX and the automotive company Tesla
          </Text>
          <Text className="p-2 text-lg text-gray-400">
            Elon Reeve Musk (/ˈiːlɒn mʌsk/; born June 28, 1971) is a businessman
            known for his key roles in the space company SpaceX and the
            automotive company Tesla, Inc. He is also known for his ownership of
            X Corp. (the company that operates the social media platform X,
            formerly Twitter), and his role in the founding of the Boring
            Company, xAI, Neuralink, and OpenAI. Musk is the wealthiest
            individual in the world; as of January 2025, Forbes estimates his
            net worth to be US$421 billion. A member of the wealthy South
            African Musk family, Musk was born in Pretoria and briefly attended
            the University of Pretoria. At the age of 18 he immigrated to
            Canada, acquiring its citizenship through his Canadian-born mother,
            Maye. Two years later, he matriculated at Queen's University in
            Canada. Musk later transferred to the University of Pennsylvania and
            received bachelor's degrees in economics and physics
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
