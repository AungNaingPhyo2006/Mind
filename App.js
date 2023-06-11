import React, {useState, useEffect} from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import SplashScreen from './src/screens/splash/SplashScreen';
import useAppState from './src/constant/Zustand';
import i18n from './i18n.config';
import {I18nextProvider} from 'react-i18next';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));
  const handleLanguageChange = lng => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual loading logic
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <TabNavigator onLanguageChange={handleLanguageChange} />
    </I18nextProvider>
  );
};

export default App;
