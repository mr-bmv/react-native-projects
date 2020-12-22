import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useRandomContext } from '../../context/RandomContext'

const AddGroupScreen = ({ navigation }) => {
  const { theme, createGroup } = useRandomContext();

  const [newGroup, setNewGroup] = useState("");

  const onSubmit = () => {
    if (newGroup.trim()) {
      createGroup(newGroup)
      setNewGroup('')
      navigation.navigate('Groups')
    }
  };
  useEffect(() => {
    return () => {
      setNewGroup('')
    }
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.frame, { backgroundColor: theme.backgroundColorLight }]}>
        {/* Input frame */}
        <View style={styles.inputFrame}>
          <Text style={[styles.title, { color: theme.mainText }]}>Group Name</Text>
          <TextInput
            autoFocus={true}
            spellCheck={true}
            style={[styles.textInput, { backgroundColor: theme.input, color: theme.inputText }]}
            onChangeText={text => setNewGroup(text)}
            value={newGroup}
          />
        </View>

        {/* Buttons frame */}
        <View style={styles.buttonFrame}>
          {/* <Pressable
            style={[styles.buttonIcon, { backgroundColor: theme.primary, }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="caret-back-outline" size={40} color="black" />
          </Pressable> */}

          <Pressable
            style={[styles.button, { backgroundColor: theme.primary, }]}
            onPress={() => onSubmit()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
};
export default AddGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    width: 300,
    height: 250,
    justifyContent: "space-between",
    borderRadius: 15
  },
  inputFrame: {
    marginHorizontal: 20,
    marginTop: 30
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  textInput: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 24,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonFrame: {
    // flexDirection: "row",
    // justifyContent: "center"
    alignItems: "center"
  },
  button: {
    width: 150,
    paddingVertical: 5,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonIcon: {
    width: 70,
    paddingVertical: 5,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 26,
    color: "#FFF"
  },
});