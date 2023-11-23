import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Make sure to install the package
import UWP from '../../assets/svgs/UWP';

const UWPCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <UWP size={48} color="#1A2DD9" />
        <Text style={styles.companyName}>UWP</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 40,
        }}>
        <View>
          <Text style={styles.name}>Raj Arora</Text>
          <Text style={styles.label}>UID</Text>
          <Text style={styles.uid}>4723723010</Text>
        </View>
        <Image
          source={require('../../assets/images/person.png')} // Replace with your local image
          style={styles.profilePic}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Text style={styles.address}>
          DB Woods Gokuldham Goregaon East Mumbai 400063 Maharashtra
        </Text>

        <QRCode
          value="4723723010" // The value the QR code should represent
          size={82} // Size of the QR code
          color="black" // Color of the QR code
          backgroundColor="white" // Background color of the QR code
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    // Add shadow and other styles as needed to match your design
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 47, // Set the width as needed
    height: 48, // Set the height as needed
    resizeMode: 'stretch',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    color: '#1A2DD9',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    marginTop: 17,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    color: '#1A2DD9',
  },
  uid: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  address: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'WorkSans-Medium',
    letterSpacing: 0.6,
    textAlign: 'left',
    width: 150,
  },
  profilePic: {
    width: 102, // Adjust size as needed
    height: 102, // Adjust size as needed
    marginTop: 12,
  },
});

export default UWPCard;
