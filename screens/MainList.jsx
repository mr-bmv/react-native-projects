import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Switch, Image, TouchableOpacity, Button } from 'react-native';

import { useRandomContext } from '../context/RandomContext'

const MainList = ({ navigation }) => {

  const { state, filterPeople, changeTheme } = useRandomContext();

  useEffect(() => {
    let cancelled = false;
    filterPeople()
    return () => cancelled = true
  }, [])

  console.log(state)

  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <TouchableOpacity onPress={() => { navigation.navigate('Profile', { item }) }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `${item.img.large}`,
          }}
        />
      </TouchableOpacity>
      <Text >{item.name}</Text>
    </View>
  );

  if (state.loading) {
    return (
      <View style={styles.load}>
        <Text style={styles.spinner}>Loading</Text>
      </View>
    )
  }

  const backgroundColor = state.darkTheme ? 'black' : 'white'
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5 }}>
        <Button title="All" onPress={() => { filterPeople() }} />
        <Button title="Filer" onPress={() => { navigation.navigate('Filter') }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.darkTheme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeTheme}
          value={state.darkTheme}
        />
      </View>

      <FlatList
        renderItem={renderItem}
        data={state.users}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MainList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: `#fff`,
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