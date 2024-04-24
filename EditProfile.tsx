import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Button,
  View,
  Image,
} from "react-native";
import { FIREBASE_STORE } from './firebase'; // import FIREBASE_STORE and firebase from firebase.js
import { FIREBASE_AUTH } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import DocumentPicker from "react-native-document-picker";
import * as ImagePicker from "expo-image-picker";



const EditProfile = ({ navigation }) => {
  const uid = FIREBASE_AUTH.currentUser?.uid;

  const uploadImage = async (imageUri) => {
    const storage = getStorage();
    const imageName = `profile_images/${uid}/${new Date().getTime()}`; // Unique path for each image
    const storageRef = ref(storage, imageName);

    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      let snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  const [userBio, setUserBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [initialImage, setInitialImage] = useState('');
  

  const fetchUserData = async () => {
    const userRef = doc(FIREBASE_STORE, "users", uid);
    setLoading(true);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setInitialImage(userData.img);
      setImage(userData.img);
      setUserBio(userData.bio);
    } else {
      console.log('No such document!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };

  const handleSubmit = async () => {
    let imageUrl = initialImage;
    if (image !== initialImage) {
      imageUrl = await uploadImage(image);
      if (!imageUrl) {
        console.log("Failed to upload image.");
        return;
      }
    }

    const userRef = doc(FIREBASE_STORE, "users", uid);
    try {
      await updateDoc(userRef, {
        img: imageUrl,
        bio: userBio
      });

      navigation.navigate("Profile", {
        img: imageUrl,
        bio: userBio,
      });
      
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{
            uri: image,
          }} // Replace with your profile image URL
        />
      </View>
      <Text style={styles.sectionTitle}>Edit Profile</Text>
      <Button title="Choose file" onPress={pickImage} />
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder="Write more about yourself here..."
        placeholderTextColor={"white"}
        value={userBio}
        onChangeText={setUserBio}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#121212",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff", // White text
    textAlign: "center",
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff", // White text
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    width: "60%",
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121212", // Dark text for contrast with button
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000", // Black background for container
  },
  header: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#888",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#444444", // Grey background for input
    color: "#ffffff", // White text for input
    fontSize: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 40,
  },
});

export default EditProfile;
