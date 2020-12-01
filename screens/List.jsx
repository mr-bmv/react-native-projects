import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { useRandomContext } from '../context/RandomContext'

export default List = () => {

    const { state, getUsers } = useRandomContext();

    useEffect(() => {
        let cancelled = false;
        getUsers()
        return () => cancelled = true
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.list}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `${item.img.large}`,
                }}
            />
            <Text >{item.name}</Text>
        </View>
    );

    if (state.loading) {
        return (
            <View style={styles.load}>
                <Text style={styles.spinner}>Loading</Text>
            </View>
        )
    }
    return (
        <View >
            <FlatList
                renderItem={renderItem}
                data={state.users}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16
    },
    tinyLogo: {
        width: 160,
        height: 160,
    },
    load: {
        backgroundColor: 'tomato'
    },
    spinner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});