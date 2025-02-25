import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { signin } from "@/src/lib/api/auth";
import { signinSchema, signinType } from "@/src/lib/schema/signin";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "@/src/components/custom-text-input";
import { storeDataInStore } from "@/src/lib/store";
import { router } from "expo-router";

export default function Signin() {
  const form = useForm<signinType>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<signinType> = async (data) => {
    try {
      const response = await signin(data);
      if (response.success) {
        console.log("Signup successful:", response);
        const { token, existUser } = response;
        await storeDataInStore("authToken", token);
        await storeDataInStore("existUser", existUser);
        console.log("token", token);
        console.log("existUser", existUser);
        router.navigate("/");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
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
        <View className="flex flex-col">
          <CustomTextInput
            name="email"
            label="Email"
            placeholder="Enter email address"
            className=" placeholder:text-white"
          />

          <CustomTextInput
            name="password"
            label="Password"
            placeholder="Enter your password"
            className=" placeholder:text-white"
          />
        </View>
        <TouchableOpacity
          onPress={form.handleSubmit(onSubmit)}
          className="px-4 py-2 mt-5 border-[1px] border-white rounded-full w-72 mx-auto"
        >
          <Text className="text-center text-white">Sing In</Text>
        </TouchableOpacity>
      </FormProvider>
      <Link href={"/signup"} asChild>
        <Text className="mt-5 text-center text-white">
          Don't have account?{" "}
          <Text className="font-bold underline">sing up</Text> here
        </Text>
      </Link>
    </View>
  );
}
