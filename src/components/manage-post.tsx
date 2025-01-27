import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ManagePost() {
  return (
    <View className="mt-5">
      <View className="flex flex-row items-start justify-between gap-x-2">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/4a/97/b4/4a97b4048d262f8f7ca4b4519bbed51f.jpg",
          }}
          className="w-16 h-16 rounded-lg"
        />
        <Text className="text-white">
          Einstein's Secrets to Happiness Are Much Simpler Than You Happiness
          Are Much Simpler.
        </Text>
        <FontAwesome name="trash-o" size={24} color="white" />
      </View>
    </View>
  );
}
