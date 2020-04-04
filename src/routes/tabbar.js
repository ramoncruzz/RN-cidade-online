import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../view/Home';
import ProdutosScreen from '../view/Produtos';

const iconeTabBar = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case 'Favoritos': { iconName = focused ? 'favorite' : 'favorite-border'; } break;
      case 'Home': { iconName = 'search'; } break;
      case 'Mais': { iconName = 'more-vert'; } break;
      default: { iconName = null; }
    }
    // eslint-disable-next-line react/jsx-filename-extension
    return <Icon name={iconName} size={size} color={color} />;
  },
});


const Tabbar = () => {
  const Tab = createBottomTabNavigator();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={iconeTabBar}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
    >
      <Tab.Screen name="Favoritos" component={ProdutosScreen} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Produtos' }} />
      <Tab.Screen name="Mais" component={ProdutosScreen} options={{ title: 'Mais Opções' }} />
    </Tab.Navigator>
  );
};

export default Tabbar;
