import { useState, useEffect } from 'react';
import { View, FlatList, Alert, RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { API_KEY } from "@env"

const HomeScreen = ({ navigation }) => {
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
    return <Loading />
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {
            title: item.title,
            desc: item.description,
            urlImage: item.urlToImage,
          })}>
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
