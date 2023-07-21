import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const PlusCircleIcon = () => {
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
          d="M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19971 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649927 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0736 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9962 11.0229 28.4146 7.20983 25.6024 4.39761C22.7902 1.5854 18.9771 0.00381861 15 0ZM20.7692 16.1538H16.1538V20.7692C16.1538 21.0752 16.0323 21.3687 15.8159 21.5851C15.5995 21.8015 15.306 21.9231 15 21.9231C14.694 21.9231 14.4005 21.8015 14.1841 21.5851C13.9677 21.3687 13.8462 21.0752 13.8462 20.7692V16.1538H9.23077C8.92475 16.1538 8.63127 16.0323 8.41488 15.8159C8.19849 15.5995 8.07693 15.306 8.07693 15C8.07693 14.694 8.19849 14.4005 8.41488 14.1841C8.63127 13.9677 8.92475 13.8462 9.23077 13.8462H13.8462V9.23077C13.8462 8.92475 13.9677 8.63126 14.1841 8.41488C14.4005 8.19849 14.694 8.07692 15 8.07692C15.306 8.07692 15.5995 8.19849 15.8159 8.41488C16.0323 8.63126 16.1538 8.92475 16.1538 9.23077V13.8462H20.7692C21.0753 13.8462 21.3687 13.9677 21.5851 14.1841C21.8015 14.4005 21.9231 14.694 21.9231 15C21.9231 15.306 21.8015 15.5995 21.5851 15.8159C21.3687 16.0323 21.0753 16.1538 20.7692 16.1538Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default PlusCircleIcon;