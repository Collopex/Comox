import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const UserIcon = () => {
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
          d="M15 4C16.4587 4 17.8576 4.6058 18.8891 5.68414C19.9205 6.76247 20.5 8.22501 20.5 9.75C20.5 11.275 19.9205 12.7375 18.8891 13.8159C17.8576 14.8942 16.4587 15.5 15 15.5C13.5413 15.5 12.1424 14.8942 11.1109 13.8159C10.0795 12.7375 9.5 11.275 9.5 9.75C9.5 8.22501 10.0795 6.76247 11.1109 5.68414C12.1424 4.6058 13.5413 4 15 4ZM15 18.375C21.0775 18.375 26 20.9481 26 24.125V27H4V24.125C4 20.9481 8.9225 18.375 15 18.375Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default UserIcon;
