import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CongratsScreen,
  CongratsScreen1,
  CongratsScreen2,
} from './screens/Congrats';
import HouseIcon from './assets/svgs/HouseIcon';
import WalletIcon from './assets/svgs/WalletIcon';
import ProfileIcon from './assets/svgs/ProfileIcon';

// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    marginTop: 140,
  },
  circle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#1A2DD9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 336,
    marginTop: 32,
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    paddingHorizontal: 39,
    paddingVertical: 10,
    backgroundColor: '#1A2DD9',
    borderRadius: 8,
    marginTop: 155,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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

export default App;
