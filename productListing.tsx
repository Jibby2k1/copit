import React, { useState, useEffect } from 'react';
import { FIREBASE_STORE } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Image, Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

type Post = {
    author: string;
    details: string;
    imgUrls: string[];
    price: number;
    sizing: string | null;
  };

const ProductListing: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // Fetch posts from the database
        const fetchPosts = async () => {
            try {
                // Make an API call to retrieve posts
                const querySnapshot = await getDocs(collection(FIREBASE_STORE, 'posts'));
                const data = await Promise.all(querySnapshot.docs.map(async doc => {
                    const post = doc.data() as Post;
                    const imgUrls = await Promise.all(post.imgUrls.map(async imgPath => {
                        const storage = getStorage();
                        const imgRef = ref(storage, imgPath);
                        const url = await getDownloadURL(imgRef);
                        return url;
                    }));
                    return { ...post, imgUrls };
                }));
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleCreatePost = () => {
        // Handle create post button press
        // You can implement the logic to navigate to the create post screen or show a modal here
        console.log('Create post button pressed');
    };

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: post }) => (
                    <View>
                        <Text>Author: {post.author}</Text>
                        <Text>Details: {post.details}</Text>
                        <Text>Price: {post.price}</Text>
                        <Text>Sizing: {post.sizing}</Text>
                        {post.imgUrls && post.imgUrls.length > 0 && (
                            <Image source={{ uri: post.imgUrls[0] }} style={{ width: 100, height: 100 }} />
                        )}
                    </View>
                )}
            />
            <TouchableOpacity onPress={handleCreatePost} style={styles.button}>
                <Text style={styles.buttonText}>Create Post</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#000',
      padding: 20,
    },
    title: {
      color: 'white',
      fontSize: 24,
      marginBottom: 20,
    },
    item: {
      backgroundColor: '#333',
      padding: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      color: 'white',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      },
    buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
  });

export default ProductListing;