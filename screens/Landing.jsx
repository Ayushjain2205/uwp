import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';
import SchemePage from './Scheme';
import {CongratsScreen} from './Congrats';
import HouseIcon from '../assets/svgs/HouseIcon';
import WalletIcon from '../assets/svgs/WalletIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';

const Tab = createBottomTabNavigator();

const tabConfig = [
  {
    name: 'Home',
    component: Home,
    icon: HouseIcon,
  },
  {
    name: 'Wallet',
    component: CongratsScreen,
    icon: WalletIcon,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: ProfileIcon,
  },
];

const Landing = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      {tabConfig.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                {React.createElement(tab.icon, {
                  color: focused ? '#1A2DD9' : 'black',
                })}
                {focused && <View style={styles.activeDot} />}
              </View>
            ),
          }}
        />
      ))}
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
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#1A2DD9',
    borderTopWidth: 2,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;
