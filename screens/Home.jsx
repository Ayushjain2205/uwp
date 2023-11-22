import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Scheme from '../components/UI/Scheme';
import schemeImage1 from '../assets/images/schemes/schemeImage1.png';
import schemeImage2 from '../assets/images/schemes/schemeImage2.png';
import schemeImage3 from '../assets/images/schemes/schemeImage3.png';
import schemeImage4 from '../assets/images/schemes/schemeImage4.png';
import UWP from '../assets/svgs/UWP';
import Scan from '../assets/svgs/Scan';
import SchemesSection from '../components/UI/SchemesSection';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Text style={styles.welcome}>Hello, Rashmi</Text>
          <View style={styles.bar}>
            <View style={styles.barLeft}>
              <UWP size={40} />
              <Text style={styles.barLeftText}>4723723010</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.barRight}>
                <Scan />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <SchemesSection /> */}
        <View>
          <View style={styles.gap} />
          <Scheme
            name="Rashtriya Swasthya Bima Yojana"
            category="Health Insurance"
            image={schemeImage1}
          />
          <View style={styles.gap} />
          <Scheme
            name="Pradhan Mantri Jeevan "
            category="Life Insurance"
            image={schemeImage2}
          />
          <View style={styles.gap} />
          <Scheme
            name="Pradhan Mantri Awas Yojana"
            category="Housing"
            image={schemeImage3}
          />
          <View style={styles.gap} />
          <Scheme
            name="Pradhan Mantri Ujjwala Yojana"
            category="Energy"
            image={schemeImage4}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  gap: {
    height: 30,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  topSection: {
    marginHorizontal: 27,
    marginTop: 40,
  },
  bar: {
    marginTop: 30,
    backgroundColor: '#1A2DD9',
    height: 72,
    width: 336,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barLeftText: {
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    color: '#fff',
  },
  barRight: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
