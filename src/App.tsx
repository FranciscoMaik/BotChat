import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './routes/stack.routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
};

export default App;
