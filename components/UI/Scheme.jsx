import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
// Make sure to have the images available in your assets directory
import Check from '../../assets/svgs/Check';

const Scheme = ({name, category, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.statusContainer}>
          <Check />
          <Text style={styles.status}>ELIGIBLE</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 336,
    height: 289,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 186,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // Set your image styling here
  },
  detailsContainer: {
    padding: 12,
  },
  name: {
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    fontSize: 16,
  },
  category: {
    marginTop: 6,
    color: '#7A7A7A',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  statusIcon: {
    // Set your icon styling here
    width: 16,
    height: 16,
  },
  status: {
    fontSize: 12,
    color: '#1AC26A',
    fontWeight: '500',
    marginLeft: 5, // Adjust the gap between icon and text
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
});

export default Scheme;
