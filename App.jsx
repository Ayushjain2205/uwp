import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash'; // Adjust the path as per your directory structure
import Landing from './screens/Landing'; // Adjust the path as per your directory structure
import Create from './screens/Create';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    let timer;
    if (currentScreen === 'Splash') {
      // Show splash screen for 5 seconds
      timer = setTimeout(() => {
        setCurrentScreen('Create');
      }, 5000);
    }

    // Clean up the timer when the component unmounts or currentScreen changes
    return () => clearTimeout(timer);
  }, [currentScreen]);

  // Change to Landing screen 5 seconds after Process screen is mounted
  const handleProcessComplete = () => {
    setTimeout(() => {
      setCurrentScreen('Landing');
    }, 5000);
  };

  let content;
  switch (currentScreen) {
    case 'Splash':
      content = <Splash />;
      break;
    case 'Create':
      content = <Create onProcessComplete={handleProcessComplete} />;
      break;
    case 'Landing':
      content = <Landing />;
      break;
    default:
      content = <Splash />;
  }

  return <NavigationContainer>{content}</NavigationContainer>;
};

export default App;
