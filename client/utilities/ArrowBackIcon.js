import { View, Text } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowBackIcon = () => {
  return (
    <View>
      <Svg
        width='38'
        height='38'
        viewBox='0 0 38 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path
          d='M0 19C0 29.488 8.512 38 19 38C29.488 38 38 29.488 38 19C38 8.512 29.488 0 19 0C8.512 0 0 8.512 0 19ZM19 17.1H26.6V20.9H19V26.6L11.4 19L19 11.4V17.1Z'
          fill='#fff'
        />
      </Svg>
    </View>
  );
};

export default ArrowBackIcon;
