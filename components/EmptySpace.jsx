import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const EmptySpace = () => (
  <LinearGradient colors={['#f7f7f9', '#b6b6d2', '#00d4ff']} style={styles.linearGradient} />
)

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 28,
  },
});

export default EmptySpace;
