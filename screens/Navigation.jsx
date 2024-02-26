import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FullPostScreem from './FullPost';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'News' }} />
        <Stack.Screen name='FullPost' component={FullPostScreem} options={{ title: 'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;