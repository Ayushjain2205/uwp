// Create.jsx
import React, {useState} from 'react';
import About from '../components/create/About';
import Health from '../components/create/Health';
import Bank from '../components/create/Bank';
import Nominee from '../components/create/Nominee';
import CamScreen from '../components/create/CamScreen';
import Aadhar from '../components/create/Aadhar';

const Create = () => {
  const [currentScreen, setCurrentScreen] = useState('About');

  const goToNextScreen = () => {
    let nextScreen = '';
    switch (currentScreen) {
      case 'About':
        nextScreen = 'Health';
        break;
      case 'Health':
        nextScreen = 'Bank';
        break;
      case 'Bank':
        nextScreen = 'Nominee';
        break;
      case 'Nominee':
        nextScreen = 'Aadhar';
        break;
      // Add more cases for additional screens if needed
      default:
        nextScreen = 'About';
        break;
    }
    setCurrentScreen(nextScreen);
  };

  const goToPreviousScreen = () => {
    let prevScreen = '';
    switch (currentScreen) {
      case 'Health':
        prevScreen = 'About';
        break;
      case 'Bank':
        prevScreen = 'Health';
        break;
      case 'Nominee':
        prevScreen = 'Bank';
        break;
      case 'Aadhar':
        prevScreen = 'Nominee';
        break;
      // Add more cases if you have more screens
      default:
        prevScreen = 'About'; // or exit the create flow if needed
        break;
    }
    setCurrentScreen(prevScreen);
  };

  return (
    <React.Fragment>
      {currentScreen === 'About' && <About changeScreen={goToNextScreen} />}
      {currentScreen === 'Health' && (
        <Health
          changeScreen={goToNextScreen}
          goToPreviousScreen={goToPreviousScreen}
        />
      )}
      {currentScreen === 'Bank' && (
        <Bank
          changeScreen={goToNextScreen}
          goToPreviousScreen={goToPreviousScreen}
        />
      )}
      {currentScreen === 'Nominee' && (
        <Nominee
          changeScreen={goToNextScreen}
          goToPreviousScreen={goToPreviousScreen}
        />
      )}
      {currentScreen === 'Aadhar' && (
        <Aadhar
          changeScreen={goToNextScreen}
          goToPreviousScreen={goToPreviousScreen}
        />
      )}
    </React.Fragment>
  );
};

export default Create;
