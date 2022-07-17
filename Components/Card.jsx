import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

export default function Card({ children, loading, error }) {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='white' size='large' />
      </View>
    );
  }

  if (error) {
    return <Text>Pokemon not Found</Text>;
  }

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#f7f3dc",
    alignItems: "center",
    height: 250,
    width: 250,
  },
});
