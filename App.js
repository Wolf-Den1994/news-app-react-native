import { View } from 'react-native';
import HomeScreen from './screens/Home';
import FullPostScreem from './screens/FullPost';
import EmptySpace from './components/EmptySpace'

export default function App() {
  return (
    <View>
      <EmptySpace />
      <HomeScreen />
      {/* <FullPostScreem /> */}
    </View>
  );
}
