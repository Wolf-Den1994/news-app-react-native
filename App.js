import { useState, useEffect, Alert } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import Post from './components/Post';
import { randomDate, formatDate } from './utils/common';

export default function App() {
  const [items, setItems] = useState();

  async function fetchData() {
    try {
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
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

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
