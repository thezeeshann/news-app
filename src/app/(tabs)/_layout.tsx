import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "@/src/lib/theme";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorBlack }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "dailyhunt",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={24} color="white" />
          ),
          headerRight: () => (
            <TouchableOpacity className="pr-2">
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="top-news"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="news" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="news-video"
        options={{
          title: "video",
          headerShown: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="video" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="recommend"
        options={{
          title: "recommend",
          headerShown: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="star" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-circle" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
