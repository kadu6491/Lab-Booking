import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

import AppDrawerNavigation from './components/navigations/AppDrawerNavigation';
import AppTabNav from './components/navigations/AppTabNav';


export default function App() {
  

  return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <StatusBar style="light" />
        <AppTabNav />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 9,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 200,
  },
});
