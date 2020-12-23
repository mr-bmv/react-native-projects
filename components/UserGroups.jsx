import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { COLORS, width } from '../constants/colors';
import { useRandomContext } from '../context/RandomContext';

const UserGroups = ({ navigation, route }) => {
    const { state, theme, deleteGroup } = useRandomContext();
    console.log("************", route.params.groupsString)
    const groupString = route.params.groupsString;
    const groups = groupString.split('/')
    console.log("NEW ", groups.length)

    const group = ({ item }) => {
        return (item ?
            <View style={[styles.row, { backgroundColor: theme.backgroundColorLight }]}>

                <Text Text style={[styles.title, { color: theme.success, }]} > {item}</Text >

            </View >
            : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#002b36" }}>
                <Text style={{ color: 'white', fontSize: 36 }}> Empty Group List</Text>
            </View>
        )
    }


    return (
        <View style={[styles.container, { backgroundColor: COLORS.dark.backgroundColor }]}>
            {/* { groups.length === 1 ? */}
            <FlatList
                renderItem={group}
                data={groups}
                keyExtractor={(item, ind) => ind.toString()}
            />
            {/* : <Text style={{ color: 'white' }}>Empty</Text>
            } */}

        </View>
    )
}

export default UserGroups;

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