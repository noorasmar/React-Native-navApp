/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <StatusBar/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})