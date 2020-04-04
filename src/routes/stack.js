
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../view/Home';
import ProdutosScreen from '../view/Produtos';

const Stack = createStackNavigator();
const Stackroute = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cidade OnLine' }} />
    <Stack.Screen name="Produtos" component={ProdutosScreen} />
  </Stack.Navigator>
);

export default Stackroute;
