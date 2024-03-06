import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ExpandableButton = () => {
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
        <Animated.View style={[styles.expandableButton, { width: widthAnim }]}>
          <Text style={styles.buttonText}>{isExpanded ? 'Close' : 'Expand'}</Text>
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
  expandableButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ExpandableButton;
