import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const SchemesCategory = () => {
  return (
    <View>
      <Text style={styles.title}>Schemes for you</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.categoryContainer}>
          <Text style={styles.activeCategory}>For you</Text>
          <Text style={styles.category}>Health</Text>
          <Text style={styles.category}>Food</Text>
          <Text style={styles.category}>Education</Text>
          <Text style={styles.category}>Finance</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 58,
    marginBottom: 22,
  },
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeCategory: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 2,
    marginRight: 4,
  },
  category: {
    color: '#D8D8D8',
    marginRight: 4,
  },
});

export default SchemesCategory;
