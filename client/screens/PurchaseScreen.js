import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBasketItems,
  selectBasketItemsTotal,
  setRemoveAll,
  setRemoveFromBasket,
} from '../features/basketSlice';
import XIcon from '../utilities/XIcon';
import DeliveryIcon from '../utilities/DeliveryIcon';
import { urlFor } from '../sanity';
import EmptyBasketScreen from './EmptyBasketScreen';

const PurchaseScreen = () => {
  const navigation = useNavigation();
  const dispacth = useDispatch();
  const basketTotal = useSelector(selectBasketItemsTotal);

  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return items.length > 0 ? (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-sky-100 bg-white shadow-sm relative'>
          <View>
            <Text className='text-lg font-semibold text-center'>Basket</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-3 right-4'
          >
            <XIcon />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4  px-4 py-3 bg-white my-5 shadow-sm'>
          <DeliveryIcon />
          <Text className='flex-1 font-medium text-sm '>ETA: 35-40 min</Text>
          <TouchableOpacity>
            <Text className='text-[#EF233C] text-sm mr-2'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-100 shadow-sm'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 bg-white py-3 px-3'
            >
              <Text className='text-[#EF233C] text-sm'> {items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className='h-12 w-12 rounded-full mr-1'
              />
              <Text className='flex-1 '>{items[0]?.name}</Text>
              <Text className='mr-1'>${items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  className='text-[#EF233C] text-sm'
                  onPress={() => {
                    dispacth(setRemoveFromBasket({ id: key }));
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white mt-2 space-y-3'>
          <View className='flex-row justify-between'>
            <Text className='text-sm text-[#5F5F5F] '>Subtotal</Text>
            <Text className='text-sm text-[#5F5F5F]'>
              ${basketTotal.toFixed(2)}
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-sm text-[#5F5F5F] '>Delivery Fee</Text>
            <Text className='text-sm text-[#5F5F5F]'>$8.99</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-sm text-black font-semibold '>
              Order Total
            </Text>

            <Text className='text-sm text-black font-bold mb-1'>
              {`$${(basketTotal + 8.99).toFixed(2)} `}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PreparingOrder');
              dispacth(setRemoveAll());
            }}
            className=' rounded-2xl bg-[#EF233C] p-4'
            disabled={!items.length}
          >
            <Text className='text-white text-center font-bold text-base'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <EmptyBasketScreen />
  );
};

export default PurchaseScreen;
