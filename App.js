import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RandomProvider from './context/RandomContext'

import Profile from './components/Profile';
import MainListScreen from './screens/MainListScreen';
import SecondScreen, { TabScreen } from './screens/SecondScreen';
import FilterScreen from './screens/FilterScreen'
import { StatusBar } from 'expo-status-bar';
import Tabs from './navigation/Tabs'
import EStyleSheet from 'react-native-extended-stylesheet';
import GroupDetails from './components/GroupDetails';
import AddGroupToUser from './components/AddGroupToUser';
import UserGroups from './components/UserGroups';

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
      <Router />
    </RandomProvider>
  );
};

// build extended stylesheets with global variables
EStyleSheet.build({
  $fontColor: 'green',
  $bgColor: '#002b36',
  $bgColorL: '#fff',
  $rem: 16,
  $colorOfFont: '#2aa198',
});

const Router = () => {

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer  >

        <Stack.Navigator>
          {/* Tabs */}
          <Stack.Screen name="HomeTab" component={Tabs} />

          {/* <Stack.Screen name="Main List" component={MainListScreen} /> */}
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Person Details' }} />
          <Stack.Screen name="User Groups" component={UserGroups} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
          <Stack.Screen name={"Group Details"} component={GroupDetails} />
          <Stack.Screen name={"Add User"} component={AddGroupToUser} />

          {/* <Stack.Screen name="TabScreen" component={TabScreen} /> */}
          <Stack.Screen name="Filter" component={FilterScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
        {/* <FilterScreen /> */}
      </NavigationContainer>
    </>

    // <>
    //   <GroupDetails />
    // </>
  )
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
