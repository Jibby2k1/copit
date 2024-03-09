import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import NavButton from './NavButton';

const ExpandableTaskbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(50)).current; // Initial width value (50 in this example)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(widthAnim, {
      toValue: isExpanded ? 50 : 300, // Adjust the expanded width as needed
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={toggleExpand}>
        <Animated.View style={[styles.ExpandableTaskbar, { width: widthAnim, justifyContent: isExpanded? 'space-between': 'center'}]}>
        {isExpanded && (
        <>
        <NavButton
          isActive={isExpanded}
          image={require('./assets/Taskbar/profile.png')} // Adjust the path as needed
          onPress={ () => {console.log('Profile button pressed')}}
        />
        <NavButton
          isActive={isExpanded}
          image={require('./assets/Taskbar/shop.png')} // Adjust the path as needed
          onPress={ () => {console.log('Shop button pressed')}}
        />
        <NavButton
          isActive={isExpanded}
          image={require('./assets/Taskbar/chat.png')} // Adjust the path as needed
          onPress={ () => {console.log('Chat button pressed')}}
        />
        <NavButton
          isActive={isExpanded}
          image={require('./assets/Taskbar/like.png')} // Adjust the path as needed
          onPress={ () => {console.log('Liked button pressed')}}
        />
        </>
        )}
        <NavButton
            isActive={isExpanded}
            image={require('./assets/Taskbar/settings.png')} // Adjust the path as needed
            onPress={ () => {console.log('Button pressed')}}
          />
          
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 50, // Fixed height to prevent vertical expansion
  },
  ExpandableTaskbar: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center', 
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ExpandableTaskbar;
