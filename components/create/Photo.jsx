import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Menu from '../../assets/svgs/Menu';
import Back from '../../assets/svgs/Back';
import faceGif from '../../assets/videos/face.gif'; // Make sure the path is correct

const Photo = ({changeScreen, goToPreviousScreen}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.container}>
        {/* Top section with SVG icon */}
        <View style={styles.topSection}>
          <TouchableOpacity onPress={goToPreviousScreen}>
            <Back />
          </TouchableOpacity>
          <Menu />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Photo Verification</Text>

          <View style={styles.videoContainer}>
            <Image source={faceGif} style={styles.video} resizeMode="cover" />
          </View>

          <Text style={styles.instructions}>
            Make sure your face fits in the circle
          </Text>
        </View>

        {/* Save button */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={changeScreen}>
            <Text style={styles.saveButtonText}>Submit</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // or any color that matches your design
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
  },
  scrollViewContent: {
    alignItems: 'center',
    // add other styles you need for the content here
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    marginBottom: 40,
    marginTop: 32,
    width: 336, // Adjust width to take full width
  },
  formSection: {
    flexDirection: 'column',
    gap: 28,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    width: 336,
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%', // Full width of container
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  input: {
    padding: 10,
    height: 48,
    width: 336, // Fixed width, adjust as needed
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'WorkSans-Regular',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 8,
    marginTop: 28,
    width: 331,
  },
  addButtonText: {
    color: '#3277F5',
    fontFamily: 'WorkSans-Regular',
    // Add styles for add icon if needed
  },

  saveButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  saveButton: {
    width: 213,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#1A2DD9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '500',
    fontSize: 16,
  },
  skipButtonText: {
    fontFamily: 'WorkSans-Regular',
    marginTop: 30, // Add space between buttons
    color: '#3277F5', // Use a color that matches your design for text links
  },
  uploadSection: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Add spacing between upload sections if needed
  },
  uploadButton: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Space out the icon and the image
    alignItems: 'center', // Center items vertically
    width: 336,
    height: 155,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10, // Padding around the content
  },
  uploadCol: {
    width: '50%',
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
  },
  uploadText: {
    textAlign: 'center', // Ensure text is centered
    color: '#9E9E9E',
    fontSize: 12, // Adjust font size to match the design
    width: '100%', // Ensure the text takes up the full width of its column
  },
  aadharImage: {
    // Assuming you will replace with an actual Image component
    width: 107, // Full width of its column
    height: 66, // Full height available
    resizeMode: 'contain', // Keep aspect ratio
  },

  ellipseMask: {
    // Create an elliptical mask using borderRadius
    width: 213,
    height: 286,
    borderRadius: 106.5,
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
  },
  videoContainer: {
    height: 213,
    width: 213,
    borderRadius: 213 / 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  video: {
    height: '100%',
    width: '100%',
  },
});

export default Photo;
