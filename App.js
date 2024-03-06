// App.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Taskbar from './Taskbar'; // Import the Taskbar component

export default function App() {

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.backgroundText}>Welcome To Copit</Text>
      <Taskbar style={styles.taskbar}/>
    </SafeAreaView>
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
