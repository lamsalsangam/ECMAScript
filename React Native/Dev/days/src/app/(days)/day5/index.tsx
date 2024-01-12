import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Maps integrated
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: AirBNB Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5/airbnb" asChild>
        <Button title="Go to the AirBNB" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
