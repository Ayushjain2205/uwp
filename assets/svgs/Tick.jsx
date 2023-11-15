import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const Tick = () => {
  return (
    <View>
      <Svg width="85" height="85" viewBox="0 0 85 85" fill="none">
        <Circle
          cx="42.5"
          cy="42.5"
          r="40.5"
          fill="#1A2DD9"
          stroke="white"
          strokeWidth="4"
        />
        <Path
          d="M27.0449 42.3142L37.4693 52.5454L58.7267 31.6818"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Tick;
