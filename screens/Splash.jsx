import React from 'react';
import {View, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import splashImage from '../assets/images/splash.png'; // Make sure the path is correct

const SplashScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const resolvedImage = Image.resolveAssetSource(splashImage);
  const scaleFactor = resolvedImage.width / screenWidth;
  const imageHeight = resolvedImage.height / scaleFactor;

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={styles.container}>
        <Image
          source={splashImage}
          style={{width: screenWidth, height: imageHeight}}
          resizeMode="contain"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1A2DD9', // Set the background color for the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns children (image) to the top
    alignItems: 'center', // Centers children (image) horizontally
  },
});

export default SplashScreen;
