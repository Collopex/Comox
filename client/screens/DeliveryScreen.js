import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectPurchase } from "../features/purchaseSlice";
import DeliveryIcon from "../utilities/DeliveryIcon";
import XIconDelivery from "../utilities/XIconDelivery";
import * as Progress from "react-native-progress";

import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectPurchase);
  const navigation = useNavigation();

  return (
    <View className="bg-[#EF233C] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XIconDelivery />
          </TouchableOpacity>
          <Text className="text-base font-light text-white">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-4 shadow-lg z-50">
          <View className="flex-row justify-between items-center mb-2">
            <View>
              <Text className="text-base text-[#5F5F5F] font-light">
                Estimated Time Arrival
              </Text>
              <Text className="text-3xl font-semibold">35-40 Minutes</Text>
            </View>
            <View className="mr-2 justify-center">
              <DeliveryIcon />
            </View>
          </View>

          <Progress.Bar width={300} indeterminate={true} color="#EF233C" />

          <Text className="mt-3 text-xs text-[#5F5F5F]">
            Your order has started to be prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 z-0 -mt-10"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.title}
          description={restaurant.short_desc}
          identifier="origin"
          pinColor="#EF233C"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
