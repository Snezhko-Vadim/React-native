import 'react-native-gesture-handler';
import React, { useEffect, FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AppNavigator } from 'navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  useEffect(() => {
    if (SplashScreen !== null) {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
