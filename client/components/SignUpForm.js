import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import firebase from "../firebase";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignUpForm = () => {
  const db = firebase.firestore().collection("users");

  const SignUpForm = Yup.object().shape({
    phoneNumber: Yup.string()
      .required()
      .max(10, "A Telephone Number is required"),
    fullName: Yup.string().required().min(6, "A Full Name is required"),
    email: Yup.string().email().required("An Email Address is required"),
    password: Yup.string()
      .required()
      .min(7, "Your password has to be at least 7 characters"),
  });

  const onSignUp = async (email, password, fullName, phoneNumber) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // console.log("User created");

      db.doc(authUser.user.email).set({
        phoneNumber: phoneNumber,
        fullName: fullName,
        email: authUser.user.email,
        uid: authUser.user.uid,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <View className="mt-6">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          onSignUp(
            values.email,
            values.password,
            values.fullName,
            values.phoneNumber.trim()
          );
        }}
        validationSchema={SignUpForm}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              className={`border ${
                values.phoneNumber.length === 0 ||
                values.phoneNumber.length > 9 ||
                Validator.validate(values.phoneNumber)
                  ? "border-gray-300"
                  : "border-[#F24F63]"
              } p-4 mb-4 mx-4 rounded-lg`}
            >
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="#5F5F5F"
                keyboardType="number-pad"
                maxLength={10}
                autoCapitalize="none"
                textContentType="telephoneNumber"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
              />
            </View>

            <View
              className={`border ${
                values.fullName.length === 0 ||
                values.fullName.length > 5 ||
                Validator.validate(values.fullName)
                  ? "border-gray-300"
                  : "border-[#F24F63]"
              } p-4 mb-4 mx-4 rounded-lg`}
            >
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#5F5F5F"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
            </View>

            <View
              className={`border ${
                values.email.length < 1 || Validator.validate(values.email)
                  ? "border-gray-300"
                  : "border-[#F24F63]"
              } p-4 mb-4 mx-4 rounded-lg`}
            >
              <TextInput
                placeholderTextColor="#5F5F5F"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
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
              } p-4 mb-4 mx-4 rounded-lg`}
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

            <View className="flex items-center m-4">
              <TouchableOpacity
                className={`w-80 p-3 rounded-full  ${
                  isValid ? "bg-[#EF233C]" : "bg-[#d2d2d2]"
                } `}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text className="text-base text-white text-center ">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row m-auto space-x-2 pt-3">
              <View>
                <Text className="text-[#5F5F5F]">Already have an account?</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className=" font-semibold text-[#EF233C]">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;
