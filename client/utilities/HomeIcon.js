import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = () => {
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
          d="M12.2 27V18.5294H17.8V27H24.8V15.7059H29L15 3L1 15.7059H5.2V27H12.2Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default HomeIcon;
