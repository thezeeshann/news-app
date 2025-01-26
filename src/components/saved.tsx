import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Saved() {
  return (
    <View className="flex flex-col items-center justify-center mt-10 gap-y-4">
      <AntDesign name="inbox" size={40} color="white" className="" />
      <View>
        <Text className="text-white">You have not saved</Text>
        <Text className="text-white">anything yet</Text>
      </View>
      <TouchableOpacity className="px-6 py-3 border-2 border-white">
        <Text className="text-white">Home</Text>
      </TouchableOpacity>
    </View>
  );
}
