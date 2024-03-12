import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

const SettingsComponent = () => {
  const [isSetting1Enabled, setIsSetting1Enabled] = useState(false);
  const [isSetting2Enabled, setIsSetting2Enabled] = useState(false);

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default SettingsComponent;