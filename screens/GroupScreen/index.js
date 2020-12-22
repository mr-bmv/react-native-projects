import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { width } from '../../constants/colors';
import { useRandomContext } from '../../context/RandomContext'
import EmptyGroup from '../../components/EmptyGroup';

const GroupScreen = ({ navigation, route }) => {
  const { state, theme, deleteGroup } = useRandomContext();

  // list of all groups
  const arrayGroup = Object.keys(state.groups).map(
    item => {
      const size = Object.keys(state.groups[item]).length;
      return {
        id: item,
        size
      }
    }
  );

  const groupList = ({ item }) => {
    return (
      <View style={[styles.row, { backgroundColor: theme.backgroundColorLight }]}>

        {/* Take all friends inside the group */}
        <Pressable
          style={styles.checkBox}
          onPress={() => navigation.navigate("Group Details", { item })}
        >
          <Text style={[styles.title, { color: theme.success, }]}>{item.id}</Text>
        </Pressable>
        <View style={styles.info}>
          <Text style={[styles.qty, { color: theme.mainText }]}>{item.size}</Text>

          {/* Delete group */}
          <Pressable
            style={styles.checkBox}
            onPress={() => deleteGroup(item.id)}
          >
            <MaterialIcons name="delete-outline" size={34} color={theme.warning} />
          </Pressable>
        </View>
      </View>
    )
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      { arrayGroup.length ?
        <FlatList
          renderItem={groupList}
          data={arrayGroup}
          keyExtractor={item => item.id}
        />
        : <EmptyGroup />}

    </View>
  )
};
export default GroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: width - 30,
    height: 60,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between"
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    paddingLeft: 20,
    fontWeight: "700"
  },
  qty: {
    fontSize: 22,
    marginHorizontal: 30,
    paddingTop: 3,
  },
});