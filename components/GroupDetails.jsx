import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { COLORS, width } from '../constants/colors';
import { useRandomContext } from '../context/RandomContext';
import dummy from '../services/dummyUsers'

const GroupDetails = ({ route, navigation }) => {
    const { state, theme } = useRandomContext();
    // const navigation = useNavigation();

    const groupName = route.params.item.id

    // console.log('--')
    // console.log(route.params.item)
    // console.log('--')
    const data = state.groups[groupName]
    // console.log(data)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.card, { backgroundColor: theme.backgroundColorLight }]}
                onPress={() => { navigation.navigate('Profile', { item }) }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${item.img.large}`,
                        }}
                    />
                    <Text style={[styles.text, { color: theme.mainText, }]}>{item.name}</Text>
                </View>
                <Pressable
                    style={styles.checkBox}
                    onPress={() => console.warn("Delete group")}
                >
                    <MaterialIcons name="delete-outline" size={34} color={COLORS.dark.warning} />
                </Pressable>
            </TouchableOpacity>
        )
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", backgroundColor: theme.backgroundColor }}
        >
            <Text style={[styles.title, { color: theme.primary }]}>Group Details</Text>
            <Text style={[styles.qty, { color: theme.primary }]}>QTY</Text>
            <FlatList
                renderItem={renderItem}
                data={dummy}
                keyExtractor={item => item.id}
            />
        </View>
    )
};

export default GroupDetails;

const styles = StyleSheet.create({
    card: {
        width: width - 30,
        height: 100,
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-between"
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 10,
        borderRadius: 13
    },
    text: {
        fontSize: 18,
        marginLeft: 20,
    },
    title: {
        fontSize: 32
    },
    qty: {
        fontSize: 20
    },
    checkBox: {
        marginRight: 25
    }
});