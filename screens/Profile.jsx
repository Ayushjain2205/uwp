import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import bgImage from '../assets/images/bg.png'; // Adjust the path to your image file
import UWPCard from '../components/UI/UWPCard';

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* <Text style={styles.text}>Profile Screen</Text> */}
          <UWPCard />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A2DD9', // Set the background color
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Ensure the background image covers the whole screen
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Profile;
