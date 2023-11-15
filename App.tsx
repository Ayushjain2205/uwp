import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Tick from './assets/svgs/Tick';

const Congrats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Tick />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Congrats!</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    marginTop: 140,
  },
  circle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#1A2DD9',
  },
  textContainer: {
    width: 336,
    marginTop: 32,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  fontMedium: {
    fontWeight: 'bold',
    lineHeight: 0.6, // Adjust as needed
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
  },
});

export default Congrats;
