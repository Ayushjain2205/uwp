import React from 'react';
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
import Back from '../../assets/svgs/Back';

const Bank = ({changeScreen, goToPreviousScreen}) => {
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

        <View style={[styles.formSection]}>
          <Text style={styles.sectionTitle}>Link bank account</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Bank account</Text>
            <TextInput style={styles.input} value="SBI" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account number</Text>
            <TextInput style={styles.input} value="124412237" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>IFSC Code</Text>
            <TextInput style={styles.input} value="PO1243MK" />
          </View>
        </View>

        {/* Add work button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Need help?</Text>
        </TouchableOpacity>

        {/* Save button */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={changeScreen}>
            <Text style={styles.saveButtonText}>Save & Continue</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
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
});

export default Bank;
