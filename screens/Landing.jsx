import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CongratsScreen, CongratsScreen1, CongratsScreen2} from './Congrats'; // Adjust the path as per your directory structure
import HouseIcon from '../assets/svgs/HouseIcon'; // Adjust the path as per your directory structure
import WalletIcon from '../assets/svgs/WalletIcon'; // Adjust the path as per your directory structure
import ProfileIcon from '../assets/svgs/ProfileIcon'; // Adjust the path as per your directory structure

const Tab = createBottomTabNavigator();

const Landing = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#1A2DD9',
          borderTopWidth: 2,
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Congrats"
        component={CongratsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <HouseIcon color={focused ? '#1A2DD9' : 'black'} />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Congrats1"
        component={CongratsScreen1}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <WalletIcon color={focused ? '#1A2DD9' : 'black'} />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Congrats2"
        component={CongratsScreen2}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <ProfileIcon color={focused ? '#1A2DD9' : 'black'} />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1A2DD9',
    position: 'absolute',
    bottom: -10,
    left: 9,
  },
});

export default Landing;
