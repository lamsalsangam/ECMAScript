import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Markdown from "react-native-markdown-display";

const MarkDownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});

// Styles for the madrkdown
const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlackBold",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },

  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    // fontFamily: "Inter",
    lineHeight: 20,
  },
  fence: {
    marginBottom: 20,
  },
});

export default MarkDownDisplay;
