import React, {useState, useEffect} from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import SplashScreen from './src/screens/splash/SplashScreen';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual loading logic
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <TabNavigator />;
};

export default App;
