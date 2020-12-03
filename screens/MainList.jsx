import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

import { useRandomContext } from '../context/RandomContext'

const MainList = ({ navigation }) => {

  const { state, getUsers } = useRandomContext();

  useEffect(() => {
    let cancelled = false;
    getUsers()
    return () => cancelled = true
  }, [])

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
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5 }}>
        <Button title="All" onPress={() => { }} />
        <Button title="Filer" onPress={() => { navigation.navigate('Filter') }} />
        <Button title="Dark" onPress={() => { }} />
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
    backgroundColor: '#fff',
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