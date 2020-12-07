import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native'
import { useRandomContext } from '../context/RandomContext';

const Profile = ({ navigation, route }) => {
    /* 2. Get the param */
    const { name, age, phone, email, username, address, nationality, gender, img } = route.params.item;
    const { state } = useRandomContext();
    const backgroundColor = state.darkTheme ? 'black' : 'white';
    const color = state.darkTheme ? 'white' : 'black';
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor }}>
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
                    fontSize: 30,
                }}>
                    <Text style={{ color }}>Name: {JSON.stringify(name)}</Text>
                    <Text style={{ color }}>Age: {age}</Text>
                    <Text style={{ color }}>Phone: {phone}</Text>
                    <Text style={{ color }}>E-mail: {email}</Text>
                    <Text style={{ color }}>Username: {username}</Text>
                    <Text style={{ color }}>Address: {address}</Text>
                    <Text style={{ color }}>Nationality: {nationality}</Text>

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