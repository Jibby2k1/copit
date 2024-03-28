import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';


const ProductListing: React.FC = () => {
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        // Fetch posts from the database
        const fetchPosts = async () => {
            try {
                // Make an API call to retrieve posts
                const response = await fetch('https://api.example.com/posts');
                const data = await response.json();
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
            {posts.map((post, index) => (
                <Text key={index}>{post}</Text>
            ))}
            <Button title="Create Post" onPress={handleCreatePost} />
        </View>
    );
};

export default ProductListing;