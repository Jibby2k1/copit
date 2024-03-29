import React, { useState } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View, Dimensions} from 'react-native';
import { FIREBASE_AUTH } from './firebase';
import { FIREBASE_STORAGE } from './firebase';
import { FIREBASE_STORE } from './firebase';
import { launchImageLibrary}  from 'react-native-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, where, doc, setDoc} from 'firebase/firestore';
import RNFetchBlob from 'rn-fetch-blob';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import ProductListing from './productListing';
import { StackNavigationProp } from '@react-navigation/stack';


const ProfileComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
  const [isProductListing, setIsProductListing] = useState(false);

  const editProfile = () => {
    // Add the code to edit the profile here
  };

  // Rest of your component

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = Number(screenWidth) * 0.60;

  return isProductListing ? (
    <View style={styles.background}>
      <TouchableOpacity style={styles.button} onPress={() => setIsProductListing(false)}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <ProductListing />
    </View>
    ) : (
    <View style={styles.background}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'data:image/png;base64,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' }} // Replace with your profile image URL
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Transaction History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setIsProductListing(true)}>
      <Text style={styles.buttonText}>Product Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  profileName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileComponent;