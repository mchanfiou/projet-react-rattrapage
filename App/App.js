import React from 'react';

import Home from './CustomPages/home';
import List from './CustomPages/list';
import Contact from './CustomPages/contact';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false }}>
      <Stack.Screen name="Acceuil" component={Home} />
      <Stack.Screen name="Les Personnages" component={List}/>
      <Stack.Screen name="Contact" component={Contact}/> 
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerShown: false, tabBarInactiveTintColor: 'black', tabBarActiveTintColor: '#c0c0c0' }}>
        <Tab.Screen name="Accueil" component={StackNavigator} />
        <Tab.Screen name="Les Personnages" component={List}/>
        <Tab.Screen name="Contact" component={Contact}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;