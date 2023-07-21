import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";

const LoadingAnimation = () => {
  return (
    <View className="bg-[#EF233C] flex-1 ">
      <SafeAreaView className="items-center m-auto">
        <Animatable.Text
          className="text-white font-bold text-5xl mb-5"
          animation="pulse"
          easing="linear"
          iterationCount="infinite"
        >
          Comox's
        </Animatable.Text>
      </SafeAreaView>
    </View>
  );
};

export default LoadingAnimation;
