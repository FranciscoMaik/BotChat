import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Message from '../pages/Message';

const Stack = createStackNavigator();

const StackRouter: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
};

export default StackRouter;
