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
import { getDoc, doc, onSnapshot } from "firebase/firestore";

const ProfileComponent = ({ navigation }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState("");

  useEffect(() => {
    const uid = FIREBASE_AUTH.currentUser?.uid;
    if (uid) {
      const userDocRef = doc(FIREBASE_STORE, "users", uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setName(userData.name);
          setImage(userData.img);
          setBio(userData.bio);
        }
      });
  
      // Clean up the subscription on unmount
      return () => unsubscribe();
    }
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: image || undefined }}
        />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.userBio}>{bio}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Transaction History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Listings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
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
