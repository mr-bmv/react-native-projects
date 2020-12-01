import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';


import RandomProvider from './context/RandomContext'
import List from './screens/List';


export default App = () => {

  return (
    <View style={styles.container}>
      <RandomProvider>
        <List />
      </RandomProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Constants.statusBarHeight,
  },
});
