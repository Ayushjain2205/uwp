import React, {useState, useEffect} from 'react';
import About from '../components/create/About';
import Health from '../components/create/Health';
import Bank from '../components/create/Bank';
import Nominee from '../components/create/Nominee';
import Aadhar from '../components/create/Aadhar';
import Photo from '../components/create/Photo';
import Process from '../components/create/Process';

const screenComponents = {
  About: About,
  Health: Health,
  Bank: Bank,
  Nominee: Nominee,
  Aadhar: Aadhar,
  Photo: Photo,
  Process: Process,
};

const screenOrder = [
  'About',
  'Health',
  'Bank',
  'Nominee',
  'Aadhar',
  'Photo',
  'Process',
];

const Create = ({onProcessComplete}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const CurrentScreenComponent =
    screenComponents[screenOrder[currentScreenIndex]];

  useEffect(() => {
    if (currentScreenIndex === screenOrder.indexOf('Process')) {
      onProcessComplete();
    }
  }, [currentScreenIndex, onProcessComplete]);

  const goToNextScreen = () => {
    setCurrentScreenIndex(prevIndex =>
      prevIndex < screenOrder.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  const goToPreviousScreen = () => {
    setCurrentScreenIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <CurrentScreenComponent
      changeScreen={goToNextScreen}
      goToPreviousScreen={goToPreviousScreen}
    />
  );
};

export default Create;
