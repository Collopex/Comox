import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import ArrowBackIcon from "../utilities/ArrowBackIcon";
import RatingIcon from "../utilities/RatingIcon";
import FoodLocation from "../utilities/FoodLocation";
import MenuFoods from "../components/MenuFoods";
import BasketItems from "../components/BasketItems";
import { useDispatch } from "react-redux";
import { setPurchase } from "../features/purchaseSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispacth = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispacth(
      setPurchase({
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
      })
    );
  }, [dispacth]);

  return (
    <>
      <BasketItems />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-60  bg-gray-400"
          />
          <TouchableOpacity
            className="absolute top-8 left-4"
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <ArrowBackIcon />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className=" flex-row items-center  px-3 pt-5 ">
            <Text className="text-2xl font-bold flex-1">{title}</Text>
            <Text className="text-xs text-[#5F5F5F]">
              Closing: {closing_hour}
            </Text>
          </View>
          <View className="m-3 flex-row space-x-3">
            <View className="flex-row items-center space-x-1">
              <RatingIcon />
              <Text className="text-xs text-[#5F5F5F]">
                <Text className="text-[#EF233C] ">{rating}</Text> · {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <FoodLocation />
              <Text className="text-xs text-[#5F5F5F]">Nearby - {address}</Text>
            </View>
          </View>
          <Text className="text-[#5F5F5F] px-3 text-xs pb-6 mt-1">
            {short_desc}
          </Text>
        </View>

        <View className="pb-36">
          <Text className="px-5 pt-5 text-xl font-bold mb-3">Menu</Text>
          {/* MENU FOODS */}
          {dishes.map((data) => (
            <MenuFoods
              key={data._id}
              id={data._id}
              name={data.name}
              description={data.short_desc}
              price={data.price}
              image={data.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
