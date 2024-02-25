import { View } from 'react-native';
import Post from './components/Post';

export default function App() {
  return (
    <View>
      <Post title='Test' imageUrl='https://i.ucrazy.ru/files/pics/2023.10/2023-10-17-21-53-072.webp' createdAt='12/22/2024' />
    </View>
  );
}
