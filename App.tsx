import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/components/features/home/HomeScreen";

function ShopScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Shop Screen</Text>
    </View>
  );
}

function ScanPayScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Scan & Pay Screen</Text>
    </View>
  );
}

function CardScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Card Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#FF4B4B",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#181818",
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 10,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Shop") iconName = "bag-outline";
            else if (route.name === "Scan & Pay") iconName = "qr-code-outline";
            else if (route.name === "Card") iconName = "card-outline";
            else iconName = "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Scan & Pay" component={ScanPayScreen} />
        <Tab.Screen name="Card" component={CardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181818",
  },
  screenText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
