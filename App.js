import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react'; 

const App = () => {

  const [currentImage, setCurrentImage] = useState('image1');
  const [isExpanded, setIsExpanded] = useState(false);
  const [widthAnim] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(widthAnim, {
      toValue: isExpanded ? 0 : 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const handlePress = () => {
    setCurrentImage(prevImage => prevImage === 'image1' ? 'image2' : 'image1');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        onPress={handlePress}>
        <Image
          source={currentImage === 'image1' ? require('./assets/redbobsta.jpg') : require('./assets/saitama.jpg')}
          style={styles.media}
        />
      </TouchableOpacity>
      <TouchableOpacity
       style = {styles.expandButton}
       onPress={toggleExpand}>
      <Text> {isExpanded ? 'Collapse' : 'Expand'}</Text>
      </TouchableOpacity>
      <Animated.View style={{...styles.collapsibleContent, width: widthAnim }}>
        <Text> LOLOLOL</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  media: {
    height: 400,
    width: 400,
  },
  expandButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  collapsibleContent: {
    backgroundColor: '#c0c0c0',
    padding: 20,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 5,
  }
});

export default App;