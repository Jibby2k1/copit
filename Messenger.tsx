import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, where, getDocs } from 'firebase/firestore';
import { FIREBASE_STORE } from './firebase'; // import FIREBASE_STORE and firebase from firebase.js

const MessagingComponent = ({ route }) => {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(''); // New state for the input text
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [receiverId, setReceiverId] = useState('');

  useEffect(() => {
    if (receiverId) {
      const messagesQuery = query(
        collection(FIREBASE_STORE, 'messages'),
        where('senderID', 'in', [user.uid, receiverId]),
        where('receiverID', 'in', [user.uid, receiverId]),
        orderBy('timestamp', 'asc')
      );
  
      const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
        const newMessages = querySnapshot.docs.map((doc) => doc.data());
        setMessages(newMessages);
      });
  
      return () => {
        unsubscribe();
      };
    }
  }, [receiverId]);

  useEffect(() => {
    const combinedMessages = [...sentMessages, ...receivedMessages];
    combinedMessages.sort((a, b) => a.timestamp - b.timestamp);
    setMessages(combinedMessages);
  }, [sentMessages, receivedMessages]);

  
  async function getReceiverUidByUsername(username) {
    const usersRef = collection(FIREBASE_STORE, 'users');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
  
    let receiverUid = '';
    querySnapshot.forEach((doc) => {
      receiverUid = doc.id;
    });
  
    return receiverUid;
  }

  const sendMessage = async () => {
    if (user) {
      const newMessage = {
        senderID: user.uid,
        receiverID: receiverId,
        text: message,
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      
      await addDoc(collection(FIREBASE_STORE, 'messages'), {
        ...newMessage,
        timestamp: serverTimestamp(),
      });

      setMessage('');  // Clear the TextInput
    } else {
      console.error('No user is signed in');
    }
  };

  return (
    <View style={styles.container}>
        <TextInput
          style={styles.receiverInput}
          value={username}
          onChangeText={async (text) => {
            setUsername(text);
            const uid = await getReceiverUidByUsername(text);
            setReceiverId(uid); // Only update the receiverId state if a valid UID is returned
          }}
          placeholder="Enter receiver username"
        />
        <ScrollView>
          {receiverId && messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.message,
                message.senderID === user.uid ? styles.sent : styles.received,
              ]}
            >
              <Text style={styles.messageText}>
                {message.text}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message"
          />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a84ff',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#121212',
  },
  receiverInput: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: '#fff', // White text color
    backgroundColor: '#1f1f1f', // Dark input background color
  },
  messageInput: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: '#fff', // White text color
    backgroundColor: '#1f1f1f', // Dark input background color
    flex: 1, // Take up all available space
  },
  message: {
    maxWidth: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  messageText: {
    color: '#fff',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#0a84ff',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#1f1f1f',
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