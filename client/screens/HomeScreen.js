import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LocationIcon from '../utilities/LocationIcon';
import SearchIcon from '../utilities/SearchIcon';
import AdjustmentIcon from '../utilities/AdjustmentIcon';
import FeaturedRows from '../components/FeaturedRows';
import sanityClient from '../sanity';
import HomeIcon from '../utilities/HomeIcon';
import UserIcon from '../utilities/UserIcon';
import HeartIcon from '../utilities/HeartIcon';
import HomeBasketIcon from '../utilities/HomeBasketIcon';
import { selectBasketItems } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

import firebase from '../firebase';
import { selectUser, setUser } from '../features/userInfoSlice';

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [count, setCount] = useState();
  const userInfo = useSelector(selectUser);
  const dispacth = useDispatch();

  const date = new Date();
  const hour = date.getHours();

  const Greetings = () => {
    if (hour < 12) {
      return <Text>Good Morning</Text>;
    } else if (hour >= 12 && hour <= 17) {
      return <Text>Good Afternoon</Text>;
    } else {
      return <Text>Good Night</Text>;
    }
  };

  useEffect(() => {
    const data = async () => {
      try {
        await firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.email)
          .get()
          .then((snapshot) => {
            if (snapshot.exists) {
              dispacth(setUser(snapshot?.data()));
              setLoading(false);
            } else {
              dispacth(setUser(null));
            }
          });
      } catch (err) {
        console.log(err.message);
      }
    };
    data();
  }, []);

  useEffect(() => {
    if (items.length < 1) {
      return setCount('');
    } else {
      return setCount(items.length);
    }
  }, [items]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "featured"] {
                ...,
           restaurants[]-> {
             ...,
             dishes[]->
           }
         }  
        `
      )
      .then((data) => {
        setFeaturedCategory(data);
      })
      .catch((err) => console.log(err.message));
  }, [fetch]);

  return (
    <View className='flex-1'>
      {loading ? (
        <View className='flex-grow justify-center'>
          <ActivityIndicator size='large' />
        </View>
      ) : (
        <>
          <SafeAreaView>
            <View className=' pt-2'>
              <View className=' flex-row pb-2 items-center space-x-4 m-2'>
                {/* Header */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                >
                  <Image
                    source={require('../images/admin.webp')}
                    className='h-10 w-10 bg-gray-400 rounded-full p-3 ml-2'
                  />
                </TouchableOpacity>
                <View className='flex-1'>
                  <Text className='font-medium text-base'>
                    {' '}
                    {Greetings()},{' '}
                    {userInfo.fullName
                      .split(' ')[0]
                      .toLowerCase()
                      .split(' ')
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')}
                  </Text>
                </View>
                <View className='mx-3'>
                  <TouchableOpacity>
                    <LocationIcon />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Search Bar (NOT FUNCTIONAL FOR NOW) */}
              <TouchableOpacity></TouchableOpacity>
              <View className='flex-row items-center space-x-3 pb-2 mx-4 '>
                <View className='flex-row space-x-3 flex-1 bg-[#e2e2e2] p-3 rounded-xl'>
                  <SearchIcon />
                  <TextInput
                    placeholder='What would you like to eat?'
                    keyboardType='default'
                  />
                </View>
                <View>
                  <AdjustmentIcon />
                </View>
              </View>
            </View>

            {/* Foods */}
            <FlatList
              className='bg-gray-100'
              contentContainerStyle={{
                paddingBottom: 180,
              }}
              showsVerticalScrollIndicator='false'
              data={featuredCategory}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <FeaturedRows key={item._id} id={item._id} title={item.name} />
              )}
            />
          </SafeAreaView>

          <SafeAreaView className='absolute bottom-0 bg-gray-50 shadow-sm w-full '>
            <View className='flex-row justify-around  items-center  p-3  shadow-md'>
              <TouchableOpacity>
                <HomeIcon />
              </TouchableOpacity>

              <View>
                <TouchableOpacity
                  className='relative'
                  onPress={() => {
                    if (items.length === 0) {
                      navigation.navigate('EmptyBasket');
                    } else {
                      navigation.navigate('Purchase');
                    }
                  }}
                >
                  <HomeBasketIcon />
                  <Text className='text-[#EF233C] z-50 absolute -right-4 -top-1 '>
                    {count}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <UserIcon />
              </TouchableOpacity>

              <TouchableOpacity>
                <HeartIcon />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
