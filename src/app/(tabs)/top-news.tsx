import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TopNews() {
  return (
    <SafeAreaView className="bg-[#27272a] pt-0 px-4 h-full">
      <StatusBar style="light" />
      <View>
        <Text className="font-bold text-red-500">
          Early life​​ Putin was born on 7 October 1952 in Leningrad, Soviet
          Union (now Saint Petersburg, Russia),
        </Text>
        <Text>
          Vladimir Vladimirovich Putin is a Russian politician and former
          intelligence officer who has served as President of Russia since 2012,
          having previously served from 2000 to 2008. Putin also served as Prime
          Minister of Russia from 1999 to 2000 and again from 2008 to 2012
        </Text>
      </View>
    </SafeAreaView>
  );
}
