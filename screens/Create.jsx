// Create.jsx
import React, {useState} from 'react';
import About from '../components/create/About';
import Health from '../components/create/Health';

const Create = () => {
  const [currentScreen, setCurrentScreen] = useState('About');

  const goToNextScreen = () => {
    let nextScreen = '';
    switch (currentScreen) {
      case 'About':
        nextScreen = 'Health';
        break;
      case 'Health':
        nextScreen = 'Health';
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
    </React.Fragment>
  );
};

export default Create;
