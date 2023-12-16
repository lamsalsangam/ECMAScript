import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function DayListItem({ day }: { day: number }) {
  return (
    // asChild property will keep the child components property intact without messing with it
    <Link href={`/(days)/day${day}`} asChild>
      {/* Pressable is the alt for the View which deals with the on press event */}
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#9B4521",
    fontSize: 75,
    fontFamily: "AmaticBold",
  },
});
