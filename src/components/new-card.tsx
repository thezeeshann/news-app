import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function NewCard({ item }) {
  console.log(item, "item-data");

  return (
    <View className="border-2 border-red-500">
      <Image
        source={{
          uri: item.image,
        }}
        className="w-[100%] h-[300px]"
      />
      <Text className="mt-1 text-xl font-bold text-white">{item.title}</Text>
      <View className="flex flex-row items-center justify-between mt-1 ">
        <View className="flex-row items-center gap-x-1">
          <Text className="text-white">{item.author.fullName}</Text>
          <AntDesign name="checkcircleo" size={12} color="white" />
          <Entypo name="dot-single" size={12} color="white" />
          <Text className="text-white">now</Text>
        </View>
        <View className="flex-row items-center gap-x-4">
          <View className="flex flex-row items-center gap-x-1">
            <Feather name="message-square" size={24} color="white" />
            <Text className="text-white">2</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1">
            <FontAwesome name="whatsapp" size={24} color="white" />
            <Text className="text-white">82</Text>
          </View>

          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>
      <View className="w-[100%] h-[1px] my-8 bg-[#737373]" />
    </View>
  );
}
