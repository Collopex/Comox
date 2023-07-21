import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketItemsTotal,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import BasketIcon from "../utilities/BasketIcon";

const BasketItems = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketItemsTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Purchase")}
        className="bg-[#EF233C] mx-4 p-4 rounded-xl flex-row items-center"
      >
        <Text className=" text-white font-extrabold text-base px-2 rounded-xl ">
          {items.length}
        </Text>
        <BasketIcon />
        <Text className="text-white font-semibold text-base py-1 px-2 flex-1 ">
          View Basket
        </Text>

        <Text className="text-lg text-white font-extrabold mr-2">
          {`$ ${basketTotal.toFixed(2)}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItems;
