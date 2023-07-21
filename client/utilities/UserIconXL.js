import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const UserIconXL = () => {
  return (
    <View>
      <Svg
        width="44"
        height="46"
        viewBox="0 0 44 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M22 0C24.9174 0 27.7153 1.2116 29.7782 3.36827C31.8411 5.52494 33 8.45001 33 11.5C33 14.55 31.8411 17.4751 29.7782 19.6317C27.7153 21.7884 24.9174 23 22 23C19.0826 23 16.2847 21.7884 14.2218 19.6317C12.1589 17.4751 11 14.55 11 11.5C11 8.45001 12.1589 5.52494 14.2218 3.36827C16.2847 1.2116 19.0826 0 22 0ZM22 28.75C34.155 28.75 44 33.8962 44 40.25V46H0V40.25C0 33.8962 9.845 28.75 22 28.75Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default UserIconXL;
