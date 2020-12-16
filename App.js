import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RandomProvider from './context/RandomContext'

import Profile from './screens/Profile';
import MainList from './screens/MainList';
import SecondScreen, { TabScreen } from './screens/SecondScreen';
import FilterScreen from './screens/FilterScreen'
import { StatusBar } from 'expo-status-bar';
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default App = () => {

  return (
    <RandomProvider>
      <StatusBar hidden={true} />
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Main List">
          Tabs
          <Stack.Screen name="HomeTab" component={Tabs} />

          <Stack.Screen name="Main List" component={MainList} />
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Person Details' }} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />

          <Stack.Screen name="TabScreen" component={TabScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator> */}
        <FilterScreen />
      {/* </NavigationContainer> */}
    </RandomProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ccc',
    paddingTop: Constants.statusBarHeight,
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  load: {
    backgroundColor: 'tomato'
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
