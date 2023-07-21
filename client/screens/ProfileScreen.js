import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import UserIconXL from "../utilities/UserIconXL";
import React from "react";
import firebase from "../firebase";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userInfoSlice";
import EmailIcon from "../utilities/EmailIcon";
import PhoneIcon from "../utilities/PhoneIcon";
import AdressIcon from "../utilities/AdressIcon";
import PastOrderIcon from "../utilities/PastOrderIcon";
import CreditCardIcon from "../utilities/CreditCardIcon";
import LiveSupportIcon from "../utilities/LiveSupportIcon";
import LogoutIcon from "../utilities/LogoutIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const userInfo = useSelector(selectUser);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      AsyncStorage.removeItem("@isLoggedIn");
      console.log("sign out");
    } catch (error) {
      console.log(error);
    }
  };

  const formatPhoneNumber = () => {
    if (userInfo.phoneNumber.length < 7) {
      return `(${userInfo.phoneNumber.slice(
        0,
        3
      )}) ${userInfo.phoneNumber.slice(3)}`;
    }
    return `(${userInfo.phoneNumber.slice(0, 3)}) ${userInfo.phoneNumber.slice(
      3,
      6
    )}-${userInfo.phoneNumber.slice(6, 10)}`;
  };

  return (
    <View className="flex-1">
      <ScrollView>
        <View className=" mt-5 border border-gray-200 bg-white shadow-sm">
          <View className=" border-b border-gray-200  flex-row items-center mt-5 p-4 space-x-3 ">
            <View className="border border-gray-100 p-2 rounded-md ">
              <UserIconXL />
            </View>
            <Text className="text-base">
              {userInfo.fullName
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 px-5 py-3 border-b border-gray-200">
            <EmailIcon />
            <Text className="text-[#a4a3a3] text-xs">{userInfo.email}</Text>
          </View>
          <View className="flex-row items-center space-x-3 px-5 py-3 border-b border-gray-200">
            <PhoneIcon />
            <Text className="text-[#353535] text-xs">
              +90 {formatPhoneNumber()}
            </Text>
          </View>
        </View>

        <View className=" mt-5 border border-gray-200 bg-white shadow-sm">
          <TouchableOpacity>
            <View className="flex-row items-center space-x-3 px-5 py-3 border-b border-gray-200">
              <AdressIcon />
              <Text className="text-sm text-[#353535] ">My Address</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center space-x-4 px-5 py-3 border-b border-gray-200">
              <PastOrderIcon />
              <Text className="text-[#353535] text-sms">Past Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center space-x-4 px-5 py-3 border-b border-gray-200">
              <CreditCardIcon />
              <Text className="text-[#353535] text-sms">Payment Details</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center space-x-4 px-5 py-3 border-b border-gray-200">
              <LiveSupportIcon />
              <Text className="text-[#353535] text-sms">Live Support</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignOut}>
            <View className="flex-row items-center space-x-4 px-5 py-3 border-b border-gray-200">
              <LogoutIcon />
              <Text className="text-[#353535] text-sms">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
