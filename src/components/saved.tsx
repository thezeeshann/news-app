import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Saved() {
  return (
    <View className="px-2 my-6">
      {/* <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
        <AntDesign name="inbox" size={40} color="white" className="" />
        <View>
          <Text className="text-center text-white">You have not saved</Text>
          <Text className="text-center text-white">anything yet</Text>
        </View>
        <TouchableOpacity className="px-6 py-3 border-2 border-white">
          <Text className="text-white">Home</Text>
        </TouchableOpacity>
      </View> */}

      <View className="flex flex-row items-center justify-between gap-x-2">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/4a/97/b4/4a97b4048d262f8f7ca4b4519bbed51f.jpg",
          }}
          className="w-16 h-16 rounded-lg"
        />
        <View className="flex flex-col">
          <Text className="text-white">
            Einstein's Secrets to Happiness Are Much Simpler Than You Happiness
            Are Much Simpler.
          </Text>
          <View className="flex flex-row items-center mt-1 gap-x-2">
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/47/6b/c5/476bc56b07424e013177b6997a187d26.jpg",
              }}
              className="w-6 h-6 rounded"
            />
            <Text className="text-white">Bollywood Life</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
