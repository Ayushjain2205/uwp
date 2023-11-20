import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash'; // Adjust the path as per your directory structure
import Landing from './screens/Landing'; // Adjust the path as per your directory structure
import Create from './screens/Create';
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timer to change the state after 5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {showSplash ? <Splash /> : <Create />}
    </NavigationContainer>
  );
};

export default App;
