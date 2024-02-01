import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; 

const App = () => {

  const [currentImage, setCurrentImage] = useState('image1');

  const handlePress = () => {
    setCurrentImage(prevImage => prevImage === 'image1' ? 'image2' : 'image1');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={currentImage === 'image1' ? require('./assets/redbobsta.jpg') : require('./assets/saitama.jpg')}
        style={{ 
          height: 300,
          width: 300}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;