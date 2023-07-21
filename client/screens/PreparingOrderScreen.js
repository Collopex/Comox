import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 7500);
  });

  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Animatable.Image
        source={require("../images/preparing.gif")}
        className="w-96 h-96 justify-start"
        iterationCount={1}
        animation="slideInUp"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-black font-extrabold text-lg p-2 justify-center"
      >
        Waiting for Restaurant to accept your order, please wait for
        momentarily.
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
