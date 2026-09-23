import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MisAhorros from './screens/MisAhorros';
import TodosAhorros from './screens/TodosAhorros';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MisAhorros">
          <Drawer.Screen name="MisAhorros" component={MisAhorros} />
          <Drawer.Screen name="TodosAhorros" component={TodosAhorros} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </GestureHandlerRootView>
  );
}