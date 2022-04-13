import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail, Home, Search} from '../screens';
import {Header} from '../components';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator screenOptions={{header: props => <Header {...props} />}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
