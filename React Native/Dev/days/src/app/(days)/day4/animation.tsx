// npx expo install lottie-react-native

import { Button, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View>
      <LottieView
        // autoPlay
        ref={animation}
        style={{ width: 200, height: 200, backgroundColor: "#eee" }}
        source={require("@/../../assets/lottie/netflix.json")}
      />
      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
    </View>
  );
};

export default AnimationScreen;
