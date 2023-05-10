/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './screens/CategoryScreen';
import MealsScreen from './screens/MealsScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='CategoryScreen' component={CategoryScreen}/>
          <Stack.Screen name='MealsScreen' component={MealsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})