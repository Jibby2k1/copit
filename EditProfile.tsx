import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Switch,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { FIREBASE_STORE } from "./firebase";
import { FIREBASE_AUTH } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const EditProfile = () => {
  return (
    <View style={styles.background}>
      <View>
        <Text>hi</Text>
      </View>
    </View>
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
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121212", // Dark text for contrast with button
  },
});

export default EditProfile;
