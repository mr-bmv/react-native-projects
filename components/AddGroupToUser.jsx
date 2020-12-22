import React from 'react'
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { width } from '../constants/colors';
import { useRandomContext } from "../context/RandomContext"

const AddGroupToUser = ({ navigation, route }) => {
    const { state, setGroup, theme } = useRandomContext();
    const newGroups = Object.keys(state.groups)
    const array = newGroups.map(
        item => Object.keys(state.groups[item]).length
    )
    const arrayGroup = Object.keys(state.groups).map(
        item => {
            const size = Object.keys(state.groups[item]).length;
            return {
                id: item,
                size
            }
        }
    );

    const tempGroup = ({ item }) => {
        // console.log("Props - ", JSON.stringify(props))
        return (
            <View style={[styles.row, { backgroundColor: theme.backgroundColorLight }]}>
                <Pressable
                    style={styles.checkBox}
                    onPress={() => {
                        setGroup({
                            id: item.id,
                            data: { [route.params.item.item.id]: { ...route.params.item.item } }
                        })
                        navigation.goBack()
                    }}
                >
                    <Text style={[styles.title, { color: theme.success, }]}>{item.id}</Text>
                </Pressable>
                <View style={styles.info}>
                    <Text style={[styles.qty, { color: theme.mainText }]}>{item.size}</Text>
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
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                renderItem={tempGroup}
                data={arrayGroup}
                keyExtractor={item => item.id}
            />
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