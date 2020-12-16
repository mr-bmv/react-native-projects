import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainList from '../screens/MainList';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "7%",
    // backgroundColor: COLORS.black
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // const tintColor = focused ? COLORS.white : COLORS.gray;
          const tintColor = focused ? 'white' : 'gray';

          switch (route.name) {
            case "List":
              return (
                // <Image
                //   source={icons.dashboard_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25
                //   }}
                // />
                <Text style={{ tintColor }}>List</Text>
              )

            case "Groups":
              return (
                // <Image
                //   source={icons.search_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25
                //   }}
                // />
                <Text style={{ tintColor }}>Groups</Text>
              )

            case "Plus":
              return (
                // <Image
                //   source={icons.notification_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25
                //   }}
                // />
                <Text style={{ tintColor }} >Plus</Text>
              )

            case "Avatar":
              return (
                // <Image
                //   source={icons.menu_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25
                //   }}
                // />
                <Text style={{ tintColor }}>Avatar</Text>
              )
          }
        }
      })}
    >

      <Tab.Screen name="List" component={MainList} />
      <Tab.Screen name="Groups" component={MainList} />
      <Tab.Screen name="Plus" component={MainList} />
      <Tab.Screen name="Avatar" component={MainList} />

    </Tab.Navigator>
  )
};

export default Tabs;