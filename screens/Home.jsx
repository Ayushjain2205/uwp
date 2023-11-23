import React, {useState} from 'react';
import AllSchemes from './AllSchemes';
import SchemePage from './Scheme';
import {CongratsScreen} from './Congrats';
import Scan from './Scan';
import Pay from './Pay';
import {View, Text} from 'react-native';

const SchemeManager = () => {
  // State to track the current screen
  const [currentScreen, setCurrentScreen] = useState('AllSchemes');

  // Function to navigate to SchemePage
  const showSchemePage = () => {
    setCurrentScreen('SchemePage');
  };

  // Function to navigate to CongratsScreen
  const showCongratsScreen = () => {
    setCurrentScreen('CongratsScreen');
  };

  // Function to navigate back to AllSchemes
  const showAllSchemes = () => {
    setCurrentScreen('AllSchemes');
  };

  const showScanner = () => {
    setCurrentScreen('Scanner');
  };

  const showPay = () => {
    setCurrentScreen('Pay');
  };

  // Render the current screen based on state
  return (
    <>
      {currentScreen === 'AllSchemes' && (
        <AllSchemes
          onSchemeSelect={showSchemePage}
          onScanSelect={showScanner}
        />
      )}
      {currentScreen === 'SchemePage' && (
        <SchemePage onOptInSelect={showCongratsScreen} />
      )}
      {currentScreen === 'CongratsScreen' && (
        <CongratsScreen onDone={showAllSchemes} />
      )}
      {currentScreen === 'Scanner' && <Scan onDone={showPay} />}
      {currentScreen === 'Pay' && <Pay onDone={showAllSchemes} />}
    </>
  );
};

export default SchemeManager;
