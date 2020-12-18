import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Switch, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import { width } from '../constants/colors';

import { useRandomContext } from '../context/RandomContext'

const MainListScreen = ({ navigation }) => {

  const { state, filterPeople, changeTheme, theme } = useRandomContext();

  useEffect(() => {
    let cancelled = false;
    filterPeople()
    return () => cancelled = true
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.backgroundColorLight }]}
      onPress={() => { navigation.navigate('Profile', { item }) }}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.img.large}`,
        }}
      />
      <Text style={[styles.text, { color: theme.mainText, }]}>{item.name}</Text>
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

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      {/* Filter Panel */}
      <View style={[styles.filterPanel, { backgroundColor: theme.navbar }]}>
        <Pressable
          onPress={() => { filterPeople() }}
          style={[styles.button, { backgroundColor: theme.primary, }]}>
          <Text style={{ color: "white", fontSize: 20, }}>All</Text>
        </Pressable>
        <Pressable
          onPress={() => { navigation.navigate('Filter') }}
          style={[styles.button, { backgroundColor: theme.primary, }]}>
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
    </View >
  );
};

export default MainListScreen;

const styles = StyleSheet.create({
  filterPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: width - 30,
    height: 100,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20
  },
  row: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 40,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderRadius: 13
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 10
  }
});