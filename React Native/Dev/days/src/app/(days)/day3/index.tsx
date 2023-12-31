import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `# Markdown

Integrate Markdown content in **React Native**`;

const DayDetailsScreen = () => {
  const { day }: { day: string } = useLocalSearchParams();
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2: MarkDown" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href={"/day3/editor"} asChild>
        <Button title="Go to Editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
