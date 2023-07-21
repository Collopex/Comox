import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = () => {
  return (
    <View>
      <Svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M15 26L13.26 24.4174C7.08 18.8185 3 15.1139 3 10.594C3 6.88937 5.904 4 9.6 4C11.688 4 13.692 4.97112 15 6.49373C16.308 4.97112 18.312 4 20.4 4C24.096 4 27 6.88937 27 10.594C27 15.1139 22.92 18.8185 16.74 24.4174L15 26Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default HeartIcon;
