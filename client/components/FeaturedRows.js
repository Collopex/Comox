import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRows = ({ id, title }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
       *[_type == "featured" && _id == $id] {
           ...,
            restaurants[]-> {
              ...,
             dishes[]->,
             type-> {
              name
             }
           }
       } [0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className='mt-3 px-4'>
        <Text className='text-base font-medium'>{title}</Text>
      </View>

      {/* Restaurant Cards */}
      <FlatList
        className='pt-2'
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator='false'
        data={restaurants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            title={item.name}
            imgUrl={item.image}
            rating={item.rating}
            closing_hour={item.closing_hour}
            genre={item.type?.name}
            address={item.address}
            short_desc={item.short_desc}
            dishes={item.dishes}
            lng={item.lng}
            lat={item.lat}
          />
        )}
      />
    </View>
  );
};

export default FeaturedRows;
