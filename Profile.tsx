import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { FIREBASE_AUTH } from "./firebase";
import { FIREBASE_STORE } from "./firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";

const ProfileComponent = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  const route = useRoute();

  const editProfile = () => {
    navigation.navigate("EditProfile");
  };

  const post = () => {
    // Add the code to post here
  };

  const [name, setName] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth * 0.6;

  useEffect(() => {
    const fetchUserData = async () => {
      const uid = FIREBASE_AUTH.currentUser?.uid;
      if (uid) {
        const userDoc = await getDoc(doc(FIREBASE_STORE, "users", uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name);
        }
      }
    };

    fetchUserData();
  }, []);

  console.log(route.params.image);

  return (
    <View style={styles.background}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{
            uri: route.params.image,
          }} // Replace with your profile image URL
        />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.userBio}>{route.params.userBio}</Text>
      </View>

      <TouchableOpacity onPress={editProfile} style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Transaction History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  profileName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  userBio: {
    marginTop: 15,
    color: "white",
  },
});

export default ProfileComponent;
