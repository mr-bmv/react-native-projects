import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native'

import MainList from './MainList';

const Profile = ({ navigation, route }) => {
    /* 2. Get the param */
    const { name, age, phone, email, username, address, nationality, gender, img } = route.params.item;
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: `${img.large}`,
                    }}
                />
            </View>
            <ScrollView
            >
                <View style={{
                    paddingLeft: 15,
                    fontSize: 30
                }}>
                    <Text>Name: {JSON.stringify(name)}</Text>
                    <Text>Age: {age}</Text>
                    <Text>Phone: {phone}</Text>
                    <Text>E-mail: {email}</Text>
                    <Text>Username: {username}</Text>
                    <Text>Address: {address}</Text>
                    <Text>Nationality: {nationality}</Text>

                    {/* get params from SecondScreen */}
                    {!route.params?.post || <Text>Note: {route.params?.post}</Text>}

                </View>
            </ScrollView>

            <Button title="Go MainList" onPress={() => navigation.navigate('Main List')} />
            <Button title="Go to Second" onPress={() => navigation.navigate('SecondScreen')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: 300,
    }
});