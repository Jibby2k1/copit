import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Red Bobsta</Text>
      <Image source = {require("./assets/redbobsta.jpg")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
