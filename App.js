// App.js
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, useAnimatedValue, Text } from "react-native";
import Taskbar from "./Taskbar"; // Import the Taskbar component
import SwipableImages from "./Swiper";
import MessagingComponent from "./Messenger";
import LikedComponent from "./Wishlist";
import ProfileComponent from "./Profile";
import SettingsComponent from "./Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EditProfile from "./EditProfile";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function InsideLayout({ route }) {
  const { user, image, setImage } = route.params; // get the user from the route params
  const [wishlist, setWishlist] = useState([]);

  console.log(`TEST: ${route.params.image}`);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#007BFF",
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="SwippableImages"
      >
        {(props) => <SwipableImages {...props} setWishlist={setWishlist} />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
        name="Messaging"
        component={MessagingComponent}
        initialParams={{ user: user }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        name="Liked"
      >
        {(props) => (
          <LikedComponent
            {...props}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileComponent}
        initialParams={{
          user: user,
          image: image,
          setImage: setImage,
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={SettingsComponent}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(
    "data:image/png;base64,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"
  );

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ cardStyle: { backgroundColor: "black" } }}
      >
        {user ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Inside"
              component={InsideLayout}
              initialParams={{
                image: image,
                setImage: setImage,
                user: user,
              }} // pass the user state as a prop
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EditProfile"
              component={EditProfile}
              initialParams={{ image: image, setImage: setImage, user: user }} // pass the user state as a prop
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundText: {
    color: "#fff",
    fontSize: 20,
  },
  media: {
    height: 300,
    width: "100%",
  },
});
