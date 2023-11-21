import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';
import HouseIcon from '../assets/svgs/HouseIcon';
import WalletIcon from '../assets/svgs/WalletIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';

const Tab = createBottomTabNavigator();

const Landing = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
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
        name="Home"
        component={Home}
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
        name="Wallet"
        component={Wallet}
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
        name="Profile"
        component={Profile}
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
