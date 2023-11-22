import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const categories = ['For you', 'Health', 'Food', 'Education', 'Finance'];

const SchemesForYou = () => {
  const [selectedCategory, setSelectedCategory] = useState('For you');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schemes for you</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.categoriesContainer}
        showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={styles.categoryItem}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
              {category}
            </Text>
            {selectedCategory === category && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 23,
    marginLeft: 27,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  categoriesContainer: {
    paddingHorizontal: 27,
    flexDirection: 'row',
  },
  categoryItem: {
    marginRight: 22,
    alignItems: 'center', // Center the text and underline
  },
  underline: {
    height: 2,
    backgroundColor: 'black',
    width: '100%', // Full width of the text
    marginTop: 3,
  },
  categoryText: {
    color: '#D8D8D8',
    fontSize: 16,
    paddingBottom: 2, // Spacing for the underline
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  categoryTextActive: {
    color: 'black',
    fontWeight: '500',
  },
});

export default SchemesForYou;
