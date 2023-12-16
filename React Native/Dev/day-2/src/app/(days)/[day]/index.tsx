import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const DayDetailsScreen = () => {
  const { day }: { day: string } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />

      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day {day} Details Screen
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
