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
import Plus from '../../assets/svgs/Plus';

const About = ({changeScreen}) => {
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
          <Text style={styles.sectionTitle}>Tell us about you</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First name</Text>
            <TextInput style={styles.input} value="Raj" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last name</Text>
            <TextInput style={styles.input} value="Arora" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of birth</Text>
            <TextInput style={styles.input} value="19/02/2001" />
          </View>
        </View>

        {/* Work section */}
        <View style={[styles.formSection, {marginTop: 60}]}>
          <Text style={styles.sectionTitle}>About your work</Text>

          {/* Job title input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Job Title</Text>
            <TextInput style={styles.input} value="Clerk" />
          </View>

          {/* Years input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Years</Text>
            <TextInput style={styles.input} value="7" />
          </View>

          {/* Salary input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Salary</Text>
            <TextInput style={styles.input} value="5000 - 50000" />
          </View>
        </View>

        {/* Add work button */}
        <TouchableOpacity style={styles.addButton}>
          <Plus />
          <Text style={styles.addButtonText}>Add another work</Text>
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
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginTop: 32,
    width: 336,
  },
  formSection: {
    flexDirection: 'column',
    gap: 28,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%', // Full width of container
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
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
    fontWeight: '500',
    fontSize: 16,
  },
  // Add any additional styles you may need
});

export default About;
