import { View, Text, ScrollView } from "react-native";
import { navData } from "../lib/data";

export default function TopNavbar() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row items-center gap-x-6">
        {navData.map((item) => (
          <Text className="text-white h-10 font-semibold" key={item.id}>
            {item.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
