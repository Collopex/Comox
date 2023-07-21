import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-grow">
      <View className="flex items-start mt-28 mx-4">
        <Text className="font-bold text-4xl text-gray-900">Login</Text>
        <Text className="text-[#5F5F5F] text-base my-2">
          Please sign in to continue.
        </Text>
      </View>
      {/* LOGIN FORM */}
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
