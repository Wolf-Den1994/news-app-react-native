import { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Post from './components/Post';
import { randomDate, formatDate } from './utils/common';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const { data: photos } = await axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100');

      const result = posts.map((post) => {
        const date = randomDate(new Date(2012, 0, 1), new Date())

        return {
          ...post,
          imageUrl: photos[post.id - 1].url,
          thumbnailUrl: photos[post.id - 1].thumbnailUrl,
          createdAt: formatDate(date),
        }
      })

      setItems(result);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Oops, failed to retrieve data!');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large" />
        <Text style={{marginTop: 15}}>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  );
}
