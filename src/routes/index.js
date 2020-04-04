import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabbar from './tabbar';
import Stackroute from './stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tabb">
      <Stack.Screen name="Tabb" component={Tabbar} options={{ title: 'Cidade OnLine' }} />
      <Stack.Screen name="Stack" component={Stackroute} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
