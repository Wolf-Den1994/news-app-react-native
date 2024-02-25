import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Post from '../components/Post';
import { API_KEY } from "@env"

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      setItems(data.articles);
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
        <Text style={{ marginTop: 15 }}>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              imageUrl={item.urlToImage}
              createdAt={item.publishedAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;
