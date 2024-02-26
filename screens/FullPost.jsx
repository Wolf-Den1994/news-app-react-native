import { useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

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

const FullPostScreem = ({ route, navigation }) => {
  const { title, desc, urlImage } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    })
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: urlImage }} />
      <PostText>{desc}</PostText>
    </View>
  )
}

export default FullPostScreem;