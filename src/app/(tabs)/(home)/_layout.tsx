import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="post/[postId]"
        options={{
          title: "",
          headerShown: false,
          headerTintColor: "white",
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
