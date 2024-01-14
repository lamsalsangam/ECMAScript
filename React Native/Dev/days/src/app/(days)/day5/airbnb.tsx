import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "@assets/data/day5/apartments.json";

export default function airbnb() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {apartments.map((apartment) => (
          <Marker
            coordinate={{
              latitude: apartment.latitude,
              longitude: apartment.longitude,
            }}
            key={apartment.id}
            title={apartment.title}
          >
            <Text>$ {apartment.price}</Text>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
