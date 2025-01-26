import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ManagePost() {
  return (
    <View className="mt-5">
      <View className="flex flex-row items-center w-24 px-4 py-1 border-2 border-white">
        <Text className="text-white">Clear</Text>
        <MaterialIcons name="delete" size={24} color="white" />
      </View>
    </View>
  );
}
