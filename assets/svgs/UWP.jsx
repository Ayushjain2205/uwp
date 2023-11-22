import React from 'react';
import {View} from 'react-native';
import Svg, {Path, Ellipse} from 'react-native-svg';

const UWP = ({size = 148, color = 'white'}) => {
  return (
    <View>
      <Svg
        width={size}
        height={size * (153 / 148)} // Keeping the aspect ratio same as original
        viewBox="0 0 148 153"
        fill="none">
        <Path
          d="M76.625 53.6552C76.625 53.6552 143.372 12.9396 146.361 74.4284C149.35 135.917 76.625 101.018 76.625 101.018"
          stroke={color}
          strokeWidth="3"
        />
        <Path
          d="M73.4531 53.6552C73.4531 53.6552 5.18897 12.9396 2.13237 74.4284C-0.924237 135.917 73.4531 101.018 73.4531 101.018"
          stroke={color}
          strokeWidth="3"
        />
        <Path
          d="M103.843 42.8915C103.843 42.8915 116.239 0.999498 74.541 0.999513C32.8428 0.999528 45.1336 42.8916 45.1336 42.8916"
          stroke={color}
          strokeWidth="2"
        />
        <Path
          d="M103.108 109.565C103.108 109.565 115.505 151.457 73.8066 151.457C32.1084 151.457 44.3992 109.565 44.3992 109.565"
          stroke={color}
          strokeWidth="2"
        />
        <Ellipse
          cx="71.0723"
          cy="74.8212"
          rx="26.1846"
          ry="27.6747"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default UWP;
