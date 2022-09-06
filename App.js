import "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./Components/Header";
import HeroImage from "./Components/HeroImage";
import Body from "./Components/Body";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HeroImage"
        component={HeroImage}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "green",
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Body"
        component={Body}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Image Gallery",
          headerTitleStyle: {
            fontSize: 18,
            fontStyle: "italic",
            color: "#FF6666",
          },
          tabBarIcon: (tintColor) => (
            <Image
              source={require("./Images/logo.png")}
              style={[styles.icon, { tintColor: "red" }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Header"
        component={Header}
        options={{
          headerTitle: "Basic Shopping Menu",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "brown",
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ScrollView horizontal={false}>
    //     <Header />

    //     <HeroImage />
    //     <Body />
    //   </ScrollView>
    // </View>

    <NavigationContainer>
      {/* Rest of your app code */}
      {/* screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === "Body") {
      //       iconName = focused
      //         ? "ios-information-circle"
      //         : "ios-information-circle-outline";
      //     } else if (route.name === "HeroImage") {
      //       iconName = focused ? "ios-list-box" : "ios-list";
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name="logo-ionic" size={24} color="red" />;
      //   },
      //   tabBarActiveTintColor: "tomato",
      //   tabBarInactiveTintColor: "gray",
      // })} */}

      <Drawer.Navigator
        screenOptions={{
          headerTitle: "MAIN MENU",

          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "orange",
            marginTop: 12,
            fontSize: 16,
            fontWeight: "bold",
          },
          headerShown: true,
          drawerIcon: (tintColor) => (
            <Image
              source={require("./Images/logo.png")}
              style={[styles.icon, { tintColor: "navy" }]}
            />
          ),
        }}
      >
        <Drawer.Screen name="MyTab" component={MyTab} />
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="Body" component={Body} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 110,
    height: 22,
    marginLeft: 10,
    padding: 20,
  },
});
