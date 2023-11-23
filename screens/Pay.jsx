import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cross from '../assets/svgs/Cross';

const Pay = ({onDone}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Cross />
        </View>
        <Text style={styles.categoryText}>Payment to</Text>
        <Text style={styles.rationCardTitle}>KIRANA STORE</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'WorkSans-Regular',
              letterSpacing: 0.6,
            }}>
            Original Price
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'WorkSans-Regular',
              letterSpacing: 0.6,
            }}>
            600
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'WorkSans-Regular',
              letterSpacing: 0.6,
            }}>
            Subsidised Price
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'WorkSans-Regular',
              letterSpacing: 0.6,
            }}>
            200
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#B8B6B6',
            width: 153,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 85,
            marginBottom: 150,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '500',
              fontFamily: 'WorkSans-Regular',
              letterSpacing: 0.6,
            }}>
            ₹ 200
          </Text>
        </View>
        <TouchableOpacity style={styles.optInButton} onPress={onDone}>
          <Text style={styles.optInButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 27,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    width: '100%',
    marginBottom: 40,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  schemeImage: {
    width: 157,
    height: 175,
  },
  optInButton: {
    backgroundColor: '#1A2DD9',
    borderRadius: 8,
    height: 46,
    width: 336,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 46,
  },
  optInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
  },
  rationCardTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    marginTop: 25,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    color: '#7A7A7A',
    marginTop: 12,
  },
  description: {
    marginTop: 27,
    width: 336,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    lineHeight: 20,
  },
});

export default Pay;
