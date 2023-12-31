import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
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

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
\`\`\`
`;

const EditorScreen = () => {
  return <MarkDownDisplay>{copy}</MarkDownDisplay>;
};

export default EditorScreen;
