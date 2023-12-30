import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Markdown from "react-native-markdown-display";

const copy = `# Dummy Markdown Content

## Introduction

Welcome to this dummy markdown document! This document is created for the sole purpose of providing some example content in markdown format.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Text Formatting

You can use various text formatting options in markdown:

- **Bold Text**
- *Italic Text*
- ~~Strikethrough Text~~

## Links

You can create links easily:

[Visit OpenAI](https://www.openai.com)

## Code

You can display code snippets:

'''python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
'''
`;

const EditorScreen = () => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{copy}</Markdown>
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
});

export default EditorScreen;
