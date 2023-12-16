import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function User() {
  const { day } = useLocalSearchParams();
  return (
    <View>
      <Text>This is Day : {day}</Text>
    </View>
  );
}
