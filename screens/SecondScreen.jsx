import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export function Feed() {
  return (
    <View>
      <Text>I'm Feed</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export function Messages() {
  return (
    <View>
      <Text>I'm Messages</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SecondScreen({ navigation }) {

  const [postText, setPostText] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('SecondScreen')}
      />
      <Button title="Go to Nest Screen" onPress={() => navigation.navigate('TabScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="To Top" onPress={() => navigation.popToTop()} />

      <TextInput
        multiline
        placeholder="Add a note ..."
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Add Note"
        onPress={() => {
          // Pass params back to Profile screen
          navigation.navigate('Profile', { post: postText });
        }}
      />
    </View>
  );
}

export default SecondScreen;
