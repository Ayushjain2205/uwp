import Tick from '../assets/svgs/Tick';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Define the CongratsScreen component
export const CongratsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Tick />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>CongratsSSS!</Text>
        <Text style={styles.text}>You are a member</Text>
        <Text style={[styles.text, styles.fontMedium]}>
          RATION CARD INITIATIVE BY NFSA
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CongratsScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Tick />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Congrats 1!</Text>
        <Text style={styles.text}>You are a member</Text>
        <Text style={[styles.text, styles.fontMedium]}>
          RATION CARD INITIATIVE BY NFSA
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CongratsScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Tick />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Congrats 2!</Text>
        <Text style={styles.text}>You are a member</Text>
        <Text style={[styles.text, styles.fontMedium]}>
          RATION CARD INITIATIVE BY NFSA
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'WorkSans-Regular',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Added a background color for consistency
  },
  circleContainer: {
    marginTop: 140,
  },
  circle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#1A2DD9',
    justifyContent: 'center', // Center the Tick SVG vertically and horizontally
    alignItems: 'center',
    borderWidth: 0, // Set border width to 0 to remove any borders
    borderColor: 'transparent', // You can also set the border color to transparent
    shadowOpacity: 0, // Set shadow opacity to 0 to remove shadows on iOS
    elevation: 0,
  },
  textContainer: {
    width: 336,
    marginTop: 32,
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#000', // Added text color for readability
  },
  fontMedium: {
    fontWeight: 'bold',
    lineHeight: 28, // Updated line height for better readability
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
    textAlign: 'center', // Ensure text is centered within the button
  },
  iconContainer: {
    width: 24, // Match the width of your SVG icons
    height: 24, // Match the height of your SVG icons
    alignItems: 'center', // Centers the blue dot horizontally below the icon
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1A2DD9',
    position: 'absolute',
    bottom: -10, // Adjust the distance below the icon
    left: 9, // Centers the dot below the icon (assuming the icon is 24px wide)
  },
});
