import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import { API_KEY } from "@env"
import Loading from '../components/Loading';

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPostScreem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      setData(data.articles);
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
    <View style={{padding: 20}}>
      <PostImage source={{ uri: data[4].urlToImage }} />
      <PostText>{data[4].description}</PostText>
    </View>
  )
}

export default FullPostScreem;