import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const RatingIcon = () => {
  return (
    <View>
      <Svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M3.63375 18L5.1775 11.3447L0 6.86842L6.84 6.27632L9.5 0L12.16 6.27632L19 6.86842L13.8225 11.3447L15.3662 18L9.5 14.4711L3.63375 18Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default RatingIcon;
