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
import Upload from '../../assets/svgs/Upload';

const Aadhar = ({changeScreen, goToPreviousScreen}) => {
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
          <Text style={styles.sectionTitle}>AADHAR Verification</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter AADHAR number </Text>
            <TextInput style={styles.input} value="9098 1232 8765" />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.label}>Upload AADHAR card front</Text>
            <View style={styles.uploadButton}>
              <TouchableOpacity style={styles.uploadCol}>
                {/* Upload Icon */}
                <Upload />
              </TouchableOpacity>
              <View style={styles.uploadCol}>
                {/* Placeholder for the Aadhar card image */}
                <Image
                  source={require('../../assets/images/aadhar-front.png')} // Replace with your local image
                  style={styles.aadharImage}
                />
                <Text style={styles.instructions}>
                  Upload a picture which is clear, preferably in natural
                  sunlight without shadow
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.label}>Upload AADHAR card front</Text>
            <View style={styles.uploadButton}>
              <TouchableOpacity style={styles.uploadCol}>
                {/* Upload Icon */}
                <Upload />
              </TouchableOpacity>
              <View style={styles.uploadCol}>
                {/* Placeholder for the Aadhar card image */}
                <Image
                  source={require('../../assets/images/aadhar-back.png')} // Replace with your local image
                  style={styles.aadharImage}
                />
                <Text style={styles.instructions}>
                  Upload a picture which is clear, preferably in natural
                  sunlight without shadow
                </Text>
              </View>
            </View>
          </View>
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
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%', // Full width of container
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    width: 336,
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
    letterSpacing: 0.6,
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
    letterSpacing: 0.6,
    fontWeight: '500',
    fontSize: 16,
  },
  skipButtonText: {
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
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
  instructions: {
    fontSize: 8, // Match design font size
    color: '#9E9E9E', // Match design color
    marginTop: 8, // Space between image and text
    paddingHorizontal: 4, // Some horizontal padding if text is too close to the edge
    textAlign: 'left', // Center align text
    fontFamily: 'WorkSans-Regular',
    width: 117,
  },
});

export default Aadhar;
