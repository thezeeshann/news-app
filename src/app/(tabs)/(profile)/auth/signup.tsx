import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomTextInput from "@/src/components/custom-text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { signupSchema, signupType } from "@/src/lib/schema/signup";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

export default function Signup() {
  const form = useForm<signupType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<signupType> = (data) => {
    console.log(data);
  };

  return (
    <View className="h-full px-4 pt-4  bg-[#27272a]">
      <StatusBar style="light" />
      <View>
        <Text className="mt-5 font-semibold text-center text-white">
          Get personalised News and Viedos for you, anytime & anywhere
        </Text>
        <View className="flex flex-row items-center justify-center p-2 mt-2 gap-x-1">
          <MaterialIcons name="people-alt" size={28} color="white" />
          <Ionicons name="people" size={28} color="white" />
          <MaterialIcons name="people-alt" size={28} color="white" />
          <Ionicons name="people" size={28} color="white" />
        </View>
      </View>
      <FormProvider {...form}>
        <View className="flex flex-col mt-10 gap-y-4">
          <CustomTextInput
            name="fullName"
            label="Full name"
            placeholder="full name"
          />
        </View>
        <TouchableOpacity
          onPress={form.handleSubmit(onSubmit)}
          className="px-4 py-2 mt-5 border-[1px] border-white rounded-full w-72 mx-auto"
        >
          <Text className="text-center text-white">Sing In</Text>
        </TouchableOpacity>
      </FormProvider>
      <Link href={"/auth/signup"} asChild>
        <Text className="mt-5 text-center text-white">
          Don't have account sing up here
        </Text>
      </Link>
    </View>
  );
}
