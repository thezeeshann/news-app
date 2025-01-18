import { View, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

type RecommendedHeadlineProps = {
  headline: string;
  description: string;
};

export default function RecommendedHeadline({
  description,
  headline,
}: RecommendedHeadlineProps) {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-col gap-y-1">
        <Text className="text-2xl font-bold text-white">{headline}</Text>
        <Text className="text-gray-300">{description}</Text>
      </View>
      <EvilIcons name="search" size={24} color="white" />
    </View>
  );
}
