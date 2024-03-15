import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const MessagingComponent = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Here you can add the code to send the message to another user
    console.log(`Message sent: ${message}`);
    setMessage(''); // Clear the message input after sending
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Messaging Component</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here"
      />
      <Button title="Send" onPress={sendMessage} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },
});

export default MessagingComponent;