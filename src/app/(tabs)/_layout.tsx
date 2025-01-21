import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "@/src/lib/theme";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppContextProvider from "@/src/context/app-context";

export default function TabLayout() {
  return (
    <AppContextProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorWhite }}>
        <Tabs.Screen
          name="(home)"
          options={{
            title: "dailyhunt",
            headerTitleStyle: {
              color: theme.colorWhite,
              fontWeight: "bold",
              fontSize: 25,
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: theme.colorBlack,
            },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: theme.colorBlack,
            },
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
            headerRight: () => (
              <TouchableOpacity className="pr-2">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
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
              <FontAwesome name="search" size={24} color={color} />
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
              <Entypo name="news" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="news-video"
          options={{
            title: "dailyhunt",
            headerTitleStyle: {
              color: theme.colorWhite,
              fontWeight: "bold",
              fontSize: 25,
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: theme.colorBlack,
            },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: theme.colorBlack,
            },
            tabBarIcon: ({ size, color }) => (
              <Entypo name="video" size={24} color={color} />
            ),

            headerRight: () => (
              <TouchableOpacity className="pr-2">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="recommend"
          options={{
            title: "dailyhunt",
            headerTitleStyle: {
              color: theme.colorWhite,
              fontWeight: "bold",
              fontSize: 25,
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: theme.colorBlack,
            },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: theme.colorBlack,
            },
            tabBarIcon: ({ size, color }) => (
              <Entypo name="star" size={24} color={color} />
            ),

            headerRight: () => (
              <TouchableOpacity className="pr-2">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            title: "",
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
              <FontAwesome name="user-circle" size={24} color={color} />
            ),
            headerRight: () => (
              <TouchableOpacity className="flex flex-row items-center pr-4 gap-x-6">
                <Ionicons name="settings-outline" size={28} color="white" />
                <Ionicons
                  name="notifications-outline"
                  size={28}
                  color="white"
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
    </AppContextProvider>
  );
}
