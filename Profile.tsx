import React, { useState } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View, Dimensions} from 'react-native';

const ProfileComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  const editProfile = () => {
    // Add the code to edit the profile here
  };

  const post = () => {
    // Add the code to post here
  };

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth * 0.60;

  return (
    <View style={styles.background}>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'https://example.com/profile-picture.jpg' }}
      />
      <Text style={styles.header}>Biography</Text>
      <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={editProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={post}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  header: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
},
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    height: 50,
    width: 200, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#007BFF',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});

export default ProfileComponent;