import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {permanentlyDeleteAccount} from '@rly-network/mobile-sdk';
import {account, userDetails as userDetailsAtom} from '../state';
import Clipboard from '@react-native-clipboard/clipboard';

const Wallet = () => {
  const [rlyAccount, setRlyAccount] = useRecoilState(account);
  const userDetails = useRecoilValue(userDetailsAtom);

  const acountHumanReadable = () => {
    if (!rlyAccount) {
      return '';
    }

    const firstChars = rlyAccount.slice(0, 5);
    const lastChars = rlyAccount.slice(
      rlyAccount.length - 3,
      rlyAccount.length,
    );

    return `${firstChars}...${lastChars}`;
  };

  const resetAcc = async () => {
    await permanentlyDeleteAccount();
    setRlyAccount(undefined);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 16}}>
        @{userDetails?.name}
      </Text>
      <Text style={{fontSize: 16, marginTop: 8}}>{acountHumanReadable()}</Text>
      <View style={{marginTop: 48}}>
        <StandardButton
          title="Copy address"
          onPress={async () => {
            Clipboard.setString(rlyAccount || '');
          }}
        />
      </View>
      <View style={{marginTop: 12}}>
        <StandardButton
          title="View on Explorer"
          onPress={async () => {
            Linking.openURL(
              `https://mumbai.polygonscan.com/address/${rlyAccount}`,
            );
          }}
        />
      </View>
      <View style={{marginTop: 96}}>
        <StandardButton title="Reset Account" onPress={resetAcc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Wallet;
