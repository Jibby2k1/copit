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
} from "react-native";
import { FIREBASE_STORE } from "./firebase";
import { FIREBASE_AUTH } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
// import DocumentPicker from "react-native-document-picker";

const EditProfile = ({ navigation }) => {
  const [imageFile, setImageFile] = useState(null);
  const [userBio, setUserBio] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  // const handleFileSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     setImageFile(res);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log("User cancelled file picker");
  //     } else {
  //       console.error("Error picking file:", err);
  //     }
  //   }
  // };

  const handleSubmit = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.sectionTitle}>Edit Profile</Text>
      <Button title="Choose file" onPress={() => {}} />
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
});

export default EditProfile;
