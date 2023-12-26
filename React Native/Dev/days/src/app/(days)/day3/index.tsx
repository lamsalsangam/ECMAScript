import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";

const DayDetailsScreen = () => {
  const { day }: { day: string } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: MarkDown" }} />

      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day {day} Details Screen
      </Text>
      <Link href={"/day3/editor"} asChild>
        <Button title="Go to Editor" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
