import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import { width } from '../constants/colors';
import { useRandomContext } from '../context/RandomContext';
import { nationality } from "../assets/mapping"

const getNationality = (text) => {
    return nationality[text]
};

const dummyUser = {
    "address": "Australia Wollongong",
    "age": 24,
    "city": "Wollongong",
    "country": "Australia",
    "email": "amber.anderson@example.com",
    "gender": "female",
    "id": "003b32f8-a6d8-470c-b8f8-daf24befddb3",
    "img": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "small": "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    },
    "name": "Amber Anderson",
    "nationality": "AU",
    "phone": "0437-563-683",
    "title": "Miss",
    "username": "orangeswan704",
}

const Profile = ({ navigation, route }) => {
    /* 2. Get the param */
    const { name, age, phone, email, username, address, nationality, city, img, id } = route.params.item;
    const { theme, setGroup } = useRandomContext();
    // const id = dummyUser.id
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {/* Name and Photo */}
            <View style={styles.header}>
                <Text style={[styles.name, { color: theme.success }]} >{name}</Text>
                <Image
                    style={styles.photo}
                    source={{
                        uri: `${img.large}`,
                    }}
                />
            </View>
            {/* Person Info */}
            <ScrollView>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>Age  </Text>
                        <Text style={[styles.text, { color: theme.mainText }]}>{age}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>Phone  </Text>
                        <Text style={[styles.text, { color: theme.mainText }]}>{phone}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>E-mail  </Text>
                        <Text style={[styles.text, { color: theme.mainText }]}>{email}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>Address  </Text>
                        <Text style={[styles.text, { color: theme.mainText }]}>{city}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>Nationality  </Text>
                        <Text style={[styles.text, { color: theme.mainText }]}>{getNationality(nationality)}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.text, { color: theme.success }]}>Groups  </Text>
                        <Text style={[styles.text, { color: theme.warning }]}> Need to add </Text>
                    </View>


                    {/* get params from SecondScreen */}
                    {/* {!route.params?.post || <Text>Note: {route.params?.post}</Text>} */}

                </View >
            </ScrollView >
            {/*
            <Button title="Go MainList" onPress={() => navigation.navigate('Main List')} />
            <Button title="Go to Second" onPress={() => navigation.navigate('SecondScreen')} />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            <Pressable
                style={[styles.button, { backgroundColor: theme.primary, }]}
                // onPress={() => setGroup({ [id]: route.params.item })}
                onPress={() => navigation.navigate("Add User")}
            >

                <Text style={styles.buttonText}>Add Group </Text>
            </Pressable>
        </View >
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: "center"
    },
    name: {
        fontWeight: "700",
        fontSize: 30,
        marginVertical: 5
    },
    photo: {
        width: width - 50,
        aspectRatio: 1 / 1,
    },
    info: {
        paddingLeft: 25,
        marginTop: 10
    },
    text: {
        fontSize: 18,
        lineHeight: 28,
    },
    row: { flexDirection: "row" },
    button: {
        marginHorizontal: 25,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 46
    },
    buttonText: {
        fontSize: 26,
        color: "#fff"
    },
});
