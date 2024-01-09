import { Stack } from "expo-router";
import { useEffect, useState } from "react"; // Added useState
import { useFonts } from "expo-font";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen"; // Added AnimatedSplashScreen
import Animated, { FadeIn } from "react-native-reanimated"; // Added Animated and FadeIn

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlackBold: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "DEVember" }} />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
