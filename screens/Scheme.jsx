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
import Back from '../assets/svgs/Back';
import Menu from '../assets/svgs/Menu';
import TouchID from 'react-native-touch-id';

const SchemePage = ({onOptInSelect}) => {
  const navigation = useNavigation();

  const authenticate = () => {
    TouchID.authenticate('to demo this react-native component')
      .then(success => {
        // Success code
        console.log('auth success');
        setTimeout(() => {
          onOptInSelect();
        }, 2000);
      })
      .catch(error => {
        // Failure code
        console.log('auth fail');
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <Menu />
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/schemes/schemeImage2.png')} // Replace with your local image
            style={styles.schemeImage}
          />
        </View>

        {/* Opt-in Button */}
        <TouchableOpacity style={styles.optInButton} onPress={authenticate}>
          <Text style={styles.optInButtonText}>Opt in</Text>
        </TouchableOpacity>

        {/* Ration Card Details */}
        <Text style={styles.rationCardTitle}>RATION CARD : NFSA</Text>
        <Text style={styles.categoryText}>Food</Text>
        <Text style={styles.description}>
          Under the ONORC, all the beneficiaries from one state can get their
          share of rations in other states where the ration card was originally
          issued. Any recipient can use their ration cards at any PDS shop
          across the country. ONORC is aimed at providing universal access to
          PDS food grains for migrant workers.
        </Text>
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
    justifyContent: 'space-between',
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
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    marginTop: 30,
    width: '100%',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.6,
    color: '#7A7A7A',
    marginTop: 12,
    width: '100%',
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

export default SchemePage;
