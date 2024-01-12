import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function airbnb() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
