import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainListScreen from '../screens/MainListScreen';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRandomContext } from '../context/RandomContext';
import GroupScreen from '../screens/GroupScreen'
import AddGroupScreen from '../screens/AddGroupScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

// Kinds of icons for Tab
const tabIcons = {
  List: (tintColor) => <FontAwesome5 name="list" size={24} color={tintColor} />,
  Groups: (tintColor) => <FontAwesome name="group" size={24} color={tintColor} />,
  Plus: (tintColor) => <FontAwesome name="plus-circle" size={24} color={tintColor} />,
  Avatar: (tintColor) => <FontAwesome name="user" size={24} color={tintColor} />
}

const Tabs = () => {
  const { theme } = useRandomContext();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: "8%",
          backgroundColor: theme.backgroundColor
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? theme.primary : theme.secondary;
          const getTabIcons = tabIcons[route.name]
          return getTabIcons(tintColor)
        }
      })}
    >

      <Tab.Screen name="List" component={MainListScreen} />
      <Tab.Screen name="Groups" component={GroupScreen} />
      <Tab.Screen name="Plus" component={AddGroupScreen} />
      <Tab.Screen name="Avatar" component={UserScreen} />

    </Tab.Navigator>
  )
};

export default Tabs;
