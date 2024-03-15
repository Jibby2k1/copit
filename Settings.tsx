import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch, TouchableOpacity, Dimensions } from 'react-native';
import { FIREBASE_AUTH } from './firebase';

const SettingsComponent = () => {
  const [isSetting1Enabled, setIsSetting1Enabled] = useState(false);
  const [isSetting2Enabled, setIsSetting2Enabled] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth * 0.8;

  return (
    <View style={styles.background}>
      <View style={styles.setting}>
        <Text style={styles.text}>Setting 1</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSetting1Enabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsSetting1Enabled}
          value={isSetting1Enabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.text}>Setting 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSetting2Enabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsSetting2Enabled}
          value={isSetting2Enabled}
        />
      </View>
      <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => FIREBASE_AUTH.signOut()}>
          <Text style={styles.buttonText}>Logout</Text>
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
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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

export default SettingsComponent;