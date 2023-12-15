import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import DayListItem from "./src/components/core/DayListItem";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const days = [...Array(24)].map((_, index) => index + 1);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return <ActivityIndicator />;
  // }
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      {/* {days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}
      {/* <View style={styles.box}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>2</Text>
      </View> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },
});
