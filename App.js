// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, useAnimatedValue } from 'react-native';
import Taskbar from './Taskbar'; // Import the Taskbar component
import SwipableImages from './Swiper';
import MessagingComponent from './Messenger';
import LikedComponent from './Wishlist';
import ProfileComponent from './Profile';
import SettingsComponent from './Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen options={{headerShown: false}}name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.background}>
    //   {renderPage()}
    //   <Taskbar style={styles.taskbar} changePage={setCurrentPage}/>
    // </SafeAreaView>
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
