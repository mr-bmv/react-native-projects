import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Switch, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import { COLORS, width } from '../constants/colors';

import { useRandomContext } from '../context/RandomContext'

const MainList = ({ navigation }) => {

  const { state, filterPeople, changeTheme } = useRandomContext();

  useEffect(() => {
    let cancelled = false;
    filterPeople()
    return () => cancelled = true
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => { navigation.navigate('Profile', { item }) }}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.img.large}`,
        }}
      />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (state.loading) {
    return (
      <View style={styles.load}>
        <Text style={styles.spinner}>Loading</Text>
      </View>
    )
  };

  const emoji = state.darkTheme ? '☀️' : '🌘';

  const mode = state.darkTheme ? 'dark' : 'light';
  // const mode = true ? 'dark' : 'light';

  return (
    <View style={styles.container}>
      {/* Filter Panel */}
      <View style={styles.filterPanel}>
        <Pressable
          onPress={() => { filterPeople() }}
          style={styles.button}>
          <Text style={{ color: "white", fontSize: 20, }}>All</Text>
        </Pressable>
        <Pressable
          onPress={() => { navigation.navigate('Filter') }}
          style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>Filter</Text>
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingTop: 7 }}>☀️</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={state.darkTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={changeTheme}
            value={state.darkTheme}
          />
          <Text style={{ paddingTop: 7 }}>🌘</Text>
        </View>
      </View>
      {/* List of Results */}
      <View
        style={{ alignItems: "center" }}
      >
        <FlatList
          renderItem={renderItem}
          data={state.users}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MainList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.backgroundColor,
  },
  filterPanel: {
    flexDirection: 'row',
    backgroundColor: COLORS.dark.backgroundColorLight,
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  button: {
    backgroundColor: COLORS.dark.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    // width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: width - 30,
    height: 100,
    backgroundColor: COLORS.dark.backgroundColorLight,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20
  },
  row: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    // backgroundColor: COLORS.backgroundColorLight,
    alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 40,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderRadius: 13
  },
  load: {
    backgroundColor: 'tomato'
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: COLORS.dark.mainText,
    fontSize: 18,
    marginLeft: 10
  }
});