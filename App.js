// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, useAnimatedValue } from 'react-native';
import Taskbar from './Taskbar'; // Import the Taskbar component
import SwipableImages from './Swiper';
import MessagingComponent from './Messenger';
import LikedComponent from './Wishlist';
import ProfileComponent from './Profile';
import SettingsComponent from './Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function InsideLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#007BFF',
        tabBarStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="SwippableImages"
        component={SwipableImages}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
        name="Messaging"
        component={MessagingComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        name="Liked"
        component={LikedComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
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
  // const [currentpage, setCurrentPage] = useState('SwipableImages');
  // const renderPage = () => {
  //   switch (currentpage) {
  //     case 'SwipableImages':
  //       return <SwipableImages />;
  //     case 'Messaging':
  //       return <MessagingComponent />;
  //     case 'Liked':
  //       return <LikedComponent />;
  //     case 'Profile':
  //       return <ProfileComponent />;
  //     case 'Settings':
  //       return <SettingsComponent />;
        
  //     default:
  //       return <SwipableImages />;
  //   }
  // };
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ cardStyle: { backgroundColor: 'black' } }}>
        {user ? 
          <Stack.Screen 
            options={{
              headerShown: false,
            }} 
            name="Inside" 
            component={InsideLayout}
          /> 
          : 
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundText: {
    color: '#fff',
    fontSize: 20,
  },
  media: {
    height: 300,
    width: '100%',
  },
});
