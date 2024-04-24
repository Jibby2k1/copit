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

async function getUserDataByUid(uid) {
  const userRef = doc(FIREBASE_STORE, "users", uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    console.log("No such user!");
    return null;
  }
}

const SettingsComponent = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [userData, setUserData] = useState(null);

  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth * 0.8;

  const handleEdit = (section) => {
    Alert.alert(`Edit ${section}`, "This feature is not yet implemented.");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const uid = FIREBASE_AUTH.currentUser.uid; // replace with the actual UID
      const data = await getUserDataByUid(uid);
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView>
        <TouchableOpacity onPress={() => handleEdit("Account Information")}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Username</Text>
            <Text style={styles.text}>
              {userData?.username || "Loading..."}
            </Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text}>
              {FIREBASE_AUTH.currentUser?.email || "Loading..."}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("Payment Methods")}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Visa **** 1234</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("Shipping Address")}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>123 Main St, Anytown, USA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEdit("Privacy")}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Location Permissions</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Camera Permissions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEdit("Security")}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Change Password</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Two-Factor Authentication</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("About")}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Version</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Terms of Service</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.setting}>
          <Text style={styles.text}>Enable Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsNotificationEnabled}
            value={isNotificationEnabled}
          />
        </View>
        <TouchableOpacity onPress={() => handleEdit("Language")}>
          <Text style={styles.sectionTitle}>Language</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>App Language</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("Accessibility")}>
          <Text style={styles.sectionTitle}>Accessibility</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Font Size</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>High Contrast Mode</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("Help & Support")}>
          <Text style={styles.sectionTitle}>Help & Support</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>FAQ</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Contact Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEdit("Feedback")}>
          <Text style={styles.sectionTitle}>Feedback</Text>
          <View style={styles.setting}>
            <Text style={styles.text}>Rate Us</Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.text}>Send Feedback</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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

export default SettingsComponent;
