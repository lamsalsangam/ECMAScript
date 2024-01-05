import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `# Animation

Integrate Animation in **React Native**`;

const DayDetailsScreen = () => {
  const { day }: { day: string } = useLocalSearchParams();
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Animation" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href={"/day4/animation"} asChild>
        <Button title="Go to Animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
