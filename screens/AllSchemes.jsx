import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Scheme from '../components/UI/Scheme';
import schemeImage1 from '../assets/images/schemes/schemeImage1.png';
import schemeImage2 from '../assets/images/schemes/schemeImage2.png';
import schemeImage3 from '../assets/images/schemes/schemeImage3.png';
import schemeImage4 from '../assets/images/schemes/schemeImage4.png';
import UWP from '../assets/svgs/UWP';
import Scan from '../assets/svgs/Scan';

const categories = ['For you', 'Health', 'Food', 'Education', 'Finance'];

const AllSchemes = ({onSchemeSelect, onScanSelect}) => {
  const [selectedCategory, setSelectedCategory] = useState('For you');
  const navigation = useNavigation();

  const handleSchemePress = () => {
    navigation.navigate('Scheme');
  };
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
            <TouchableOpacity style={styles.barRight} onPress={onScanSelect}>
              <Scan />
            </TouchableOpacity>
          </View>
        </View>

        {/* Schemes Section */}
        <Text style={styles.title}>Schemes for you</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => setSelectedCategory(category)}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}>
                {category}
              </Text>
              {selectedCategory === category && (
                <View style={styles.underline} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Scheme Cards */}
        <View style={styles.gap} />
        <Scheme
          name="Rashtriya Swasthya Bima Yojana"
          category="Health Insurance"
          image={schemeImage1}
          onPress={onSchemeSelect}
        />

        <View style={styles.gap} />
        <Scheme
          name="Pradhan Mantri Jeevan Jyoti Bima Yojana"
          category="Life Insurance"
          image={schemeImage2}
          onPress={onSchemeSelect}
        />
        <View style={styles.gap} />
        <Scheme
          name="Pradhan Mantri Awas Yojana"
          category="Housing"
          image={schemeImage3}
          onPress={onSchemeSelect}
        />
        <View style={styles.gap} />
        <Scheme
          name="Pradhan Mantri Ujjwala Yojana"
          category="Energy"
          image={schemeImage4}
          onPress={onSchemeSelect}
        />
        <View style={styles.gap} />
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
  topSection: {
    marginHorizontal: 27,
    marginTop: 40,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
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
  title: {
    width: 365,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 58,
    marginBottom: 22,
    marginLeft: 27,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  categoriesContainer: {
    paddingLeft: 27,
    flexDirection: 'row',
  },
  categoryItem: {
    marginRight: 22,
    alignItems: 'center',
  },
  underline: {
    height: 2,
    backgroundColor: 'black',
    width: '100%',
    marginTop: 3,
  },
  categoryText: {
    color: '#D8D8D8',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  categoryTextActive: {
    color: 'black',
    fontWeight: 'bold',
  },
  gap: {
    height: 30,
  },
});

export default AllSchemes;
