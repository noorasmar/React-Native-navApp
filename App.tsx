/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, ProductScreen } from './screens'
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='ProductScreen' component={ProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;