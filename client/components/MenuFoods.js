import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import PlusCircleIcon from "../utilities/PlusCircleIcon";
import MinusCircleIcon from "../utilities/MinusCircleIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItemsWithId,
  setAddToBasket,
  setRemoveFromBasket,
} from "../features/basketSlice";

const MenuFoods = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(setAddToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(setRemoveFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`bg-white p-4 border border-gray-50 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-base font-semibold">{name}</Text>
            <Text className="text-[#5F5F5F]">{description}</Text>
            <Text className="text-[#EF233C] mt-2 font-medium "> ${price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="w-20 h-20 bg-gray-400 p-4 rounded-md"
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className=" bg-white px-4">
          <View className="flex-row items-center space-x-3 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon />
            </TouchableOpacity>

            <Text> {items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default MenuFoods;
