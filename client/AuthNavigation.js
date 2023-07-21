import React, { useState } from "react";
import { SignedInStacker, SignedOutStacker } from "./navigation";
import firebase from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      setCurrentUser(user);
      await AsyncStorage.setItem("@isLoggedIn", "1");
    } else {
      await AsyncStorage.setItem("@isLoggedIn", "0");
      setCurrentUser(null);
    }
  });

  return <>{currentUser ? <SignedInStacker /> : <SignedOutStacker />}</>;
};

export default AuthNavigation;
