import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

import MisAhorros from './screens/MisAhorros';
import TodosAhorros from './screens/TodosAhorros';

const Drawer = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MisAhorros">
          <Drawer.Screen name="MisAhorros" component={MisAhorros} />
          <Drawer.Screen name="TodosAhorros" component={TodosAhorros} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}