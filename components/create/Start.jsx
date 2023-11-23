import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Menu from '../../assets/svgs/Menu';
import {createAccount, getAccount} from '@rly-network/mobile-sdk';
import {useRecoilState} from 'recoil';
import {account, userDetails as userDetailsState} from '../../state';
import TouchID from 'react-native-touch-id';

const Start = ({changeScreen, goToPreviousScreen}) => {
  const [, setUserDetails] = useRecoilState(userDetailsState);
  const [, setAccount] = useRecoilState(account);

  const [mobile] = useState('');
  const [name, setName] = useState('');
  const createAcc = async () => {
    setTakingAction(true);
    setUserDetails({name: name, mobile: mobile});
    await createAccount();
    const act = await getAccount();

    setRlyAccount(act);
  };
  const authenticate = () => {
    TouchID.authenticate('To create UWP Card')
      .then(success => {
        createAcc();
        console.log('auth success');
        setTimeout(() => {
          changeScreen();
        }, 2000);
      })
      .catch(error => {
        // Failure code
        console.log('auth fail');
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.container}>
        {/* Top section with SVG icon */}
        <View style={styles.topSection}>
          <Menu />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Let’s create your ID</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile Number </Text>
            <TextInput style={styles.input} value="8900182931" />
          </View>
        </View>

        {/* Save button */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={authenticate}>
            <Text style={styles.saveButtonText}>Create Universal ID</Text>
          </TouchableOpacity>
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
    justifyContent: 'flex-end',
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
  healthForm: {
    padding: 10,
    height: 70,
    width: 336, // Fixed width, adjust as needed
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: 'WorkSans-Regular',
    alignItems: 'center',
    justifyContent: 'center',
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
  // Add any additional styles you may need
});

export default Start;
