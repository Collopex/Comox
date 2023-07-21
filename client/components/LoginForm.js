import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import firebase from "../firebase";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const navigation = useNavigation();

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email address is required"),
    password: Yup.string()
      .required()
      .min(7, "Your password has to be at least 7 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // console.log("Login successful");
    } catch (err) {
      Alert.alert(
        "The password is invalid or the user does not have a password."
      );
    }
  };

  return (
    <View className="mt-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              className={`border ${
                values.email.length < 1 || Validator.validate(values.email)
                  ? "border-gray-300"
                  : "border-[#F24F63]"
              } p-4 mx-4 mb-4 rounded-lg`}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="#5F5F5F"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                // autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              className={`border ${
                values.password.length === 0 ||
                values.password.length > 6 ||
                Validator.validate(values.password)
                  ? "border-gray-300"
                  : "border-[#F24F63]"
              }  p-4 mx-4 mb-1 rounded-lg`}
            >
              <TextInput
                placeholderTextColor="#5F5F5F"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View className="flex items-end mx-5 my-3">
              <TouchableOpacity>
                <Text className="text-xs text-[#5F5F5F]">Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View className="flex items-center m-2">
              <TouchableOpacity
                className={`w-80 p-3 rounded-full ${
                  isValid ? "bg-[#EF233C]" : "bg-[#d2d2d2]"
                } `}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text className="text-base text-white text-center">Log In</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row m-auto space-x-2 pt-6">
              <View>
                <Text className="text-[#5F5F5F]">Don't have an account?</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text className="font-semibold text-[#EF233C]">Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
