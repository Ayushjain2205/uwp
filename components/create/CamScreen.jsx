// import React, {useState} from 'react';
// import {
//   View,
//   Button,
//   Image,
//   StyleSheet,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const CamScreen = () => {
//   const [image, setImage] = useState(null);

//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           {
//             title: 'Camera Permission',
//             message: 'App needs camera permission',
//           },
//         );
//         // If CAMERA Permission is granted
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         return false;
//       }
//     } else {
//       return true;
//     }
//   };

//   const openCamera = async () => {
//     const isCameraPermitted = await requestCameraPermission();
//     if (!isCameraPermitted) {
//       return;
//     }

//     const result = await launchCamera({
//       mediaType: 'photo',
//       cameraType: 'back',
//     });

//     if (result.assets) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const openImageLibrary = async () => {
//     const result = await launchImageLibrary({
//       mediaType: 'photo',
//       quality: 1,
//     });

//     if (result.assets) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Take Photo" onPress={openCamera} />
//       <Button title="Choose Image" onPress={openImageLibrary} />
//       {image && <Image source={{uri: image}} style={styles.preview} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   preview: {
//     width: 300,
//     height: 300,
//     marginTop: 20,
//   },
// });

// export default CamScreen;
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

// You can use the ImagePicker library from Expo or react-native-image-picker
// to handle image selection in React Native
// import * as ImagePicker from 'expo-image-picker';

const IDverification = ({onSubmit}) => {
  const [aadharNumber, setAadharNumber] = useState('9219 0912 9009');
  // State for storing selected images (if using ImagePicker)
  // const [aadharFront, setAadharFront] = useState(null);
  // const [aadharBack, setAadharBack] = useState(null);

  // Function to handle image picking (if using ImagePicker)
  // const pickImage = async (isFront) => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     if (isFront) {
  //       setAadharFront(result.uri);
  //     } else {
  //       setAadharBack(result.uri);
  //     }
  //   }
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topSection}>{/* Icons can be placed here */}</View>

        <Text style={styles.sectionTitle}>AADHAR Verification</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter AADHAR number</Text>
          <TextInput
            style={styles.input}
            value={aadharNumber}
            onChangeText={setAadharNumber}
          />
        </View>

        {/* Assume you have some button or touchable to trigger image selection */}
        {/* For uploading AADHAR card front */}
        <View style={styles.uploadContainer}>
          <Text style={styles.label}>Upload AADHAR card front</Text>
          {/* <Button title="Pick an image" onPress={() => pickImage(true)} /> */}
          {/* Display the selected image */}
          {/* {aadharFront && <Image source={{ uri: aadharFront }} style={styles.image} />} */}
        </View>

        {/* For uploading AADHAR card back */}
        <View style={styles.uploadContainer}>
          <Text style={styles.label}>Upload AADHAR card back</Text>
          {/* <Button title="Pick an image" onPress={() => pickImage(false)} /> */}
          {/* Display the selected image */}
          {/* {aadharBack && <Image source={{ uri: aadharBack }} style={styles.image} />} */}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    padding: 20,
  },
  topSection: {
    // Style for top section, including back and menu icons
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 28,
  },
  inputContainer: {
    marginBottom: 28,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    padding: 10,
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
  },
  uploadContainer: {
    marginBottom: 28,
    // Add additional styling for upload containers
  },
  image: {
    width: '100%', // Set width as needed
    height: 155, // Set height as needed
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#1A2DD9',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Add any other styles you need
});

export default IDverification;
