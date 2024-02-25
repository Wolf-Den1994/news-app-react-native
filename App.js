import { View } from 'react-native';
import HomeScreen from './screens/Home';
import EmptySpace from './components/EmptySpace'

export default function App() {
  return (
    <View>
      <EmptySpace />
      <HomeScreen />
    </View>
  );
}
