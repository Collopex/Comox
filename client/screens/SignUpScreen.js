import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import SignUpForm from "../components/SignUpForm";
import ArrowBackIcon from "../utilities/ArrowBackIcon";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-grow">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="mx-4 my-4"
      >
        <ArrowBackIcon />
      </TouchableOpacity>
      <View className="flex items-start mt-4 mx-4">
        <Text className="font-bold text-4xl text-gray-900">Create Account</Text>
      </View>
      {/* SIGNUP FORM */}
      <SignUpForm />
    </SafeAreaView>
  );
};

export default SignUpScreen;
