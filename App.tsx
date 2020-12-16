import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {MainNavigation} from './src/navigation/navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
     
        <MainNavigation />
    </>
  );
};

export default App;
