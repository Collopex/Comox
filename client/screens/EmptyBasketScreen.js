import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import XIconDelivery from '../utilities/XIconDelivery';

const EmptyBasketScreen = () => {
  const navigation = useNavigation();

  return (
    <View className='bg-[#EF233C] flex-1 '>
      <TouchableOpacity
        onPress={navigation.goBack}
        className='absolute top-4 left-4'
      >
        <XIconDelivery />
      </TouchableOpacity>
      <SafeAreaView className='items-center m-auto'>
        <Text className='text-white font-bold text-4xl mb-5'>Comox </Text>
        <Text className='text-white text-xl '>Your basket seems empty. 😓</Text>
      </SafeAreaView>
    </View>
  );
};

export default EmptyBasketScreen;
