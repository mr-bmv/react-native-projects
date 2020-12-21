import React from 'react'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { COLORS, width } from '../constants/colors';
import { useRandomContext } from "../context/RandomContext"

const AddGroupToUser = () => {
    const { state } = useRandomContext();
    console.log("------------")
    console.log(state.groups)
    const newGroups = Object.keys(state.groups)
    console.log("------", newGroups, "------")
    const navigation = useNavigation();
    const GROUPS = [
        {
            id: '1aasdf',
            data: 'asdfdas'
        },
        {
            id: '2aasdf',
            data: 'asdfdas2'
        },
        {
            id: '3aasdf',
            data: 'asdfdas3'
        }
    ]

    const tempGroup = ({ item }) => {
        // console.log("Props - ", JSON.stringify(props))
        return (
            <View style={styles.row}>
                <Pressable
                    style={styles.checkBox}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.title}>{item}</Text>
                </Pressable>
                <View style={styles.info}>
                    <Text style={styles.qty}>QTY</Text>
                    {/* logic to select individual group */}
                    <Pressable
                        style={styles.checkBox}
                        onPress={() => console.warn("Delete group")}
                    >
                        {/* <Ionicons name="square-outline" size={36} color={COLORS.dark.primary} /> */}
                    </Pressable>
                </View>
            </View>
        )
    };

    return (
        <View style={[styles.container, { backgroundColor: "#002b36" }]}>
            <FlatList
                renderItem={tempGroup}
                data={newGroups}
                keyExtractor={item => item}
            />
            {/* <ScrollView >
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
            </ScrollView> */}
        </View>
    )
};
export default AddGroupToUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        backgroundColor: COLORS.dark.backgroundColorLight,
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
        color: COLORS.dark.success,
        fontSize: 22,
        paddingLeft: 20,
        fontWeight: "700"
        // fontFamily: "Roboto-Bold"
    },
    qty: {
        color: COLORS.dark.mainText,
        fontSize: 22,
        marginHorizontal: 30,
        paddingTop: 3,
        // fontWeight: "700"
    },
});