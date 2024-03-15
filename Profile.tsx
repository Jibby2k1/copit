import React, { useState } from 'react';
import { Text, StyleSheet, Image, Button, View } from 'react-native';

const ProfileComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  const editProfile = () => {
    // Add the code to edit the profile here
  };

  const post = () => {
    // Add the code to post here
  };

  return (
    <View>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'https://example.com/profile-picture.jpg' }}
      />
      <Text style={styles.text}>Biography</Text>
      <Button title="Edit Profile" onPress={editProfile} />
      <Button title="Post" onPress={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  
});

export default ProfileComponent;