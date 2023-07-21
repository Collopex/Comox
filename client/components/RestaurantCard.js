import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import RatingIcon from "../utilities/RatingIcon";
import FoodLocation from "../utilities/FoodLocation";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  closing_hour,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  lng,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-sm"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          closing_hour,
          rating,
          genre,
          address,
          short_desc,
          dishes,
          lng,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-5">
        <Text className="font-medium text-base pt-2 mb-1">{title}</Text>

        <View className="flex-row items-center space-x-1 mb-2">
          <RatingIcon />
          <Text className="text-xs text-[#5F5F5F]">
            <Text className="text-[#EF233C]"> {rating} </Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-2 ">
          <FoodLocation />
          <Text className="text-xs text-[#5F5F5F]">Nearby - {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
