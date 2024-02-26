import { View, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View style={{
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Loading...</Text>
    </View>
  )
}

export default Loading;
