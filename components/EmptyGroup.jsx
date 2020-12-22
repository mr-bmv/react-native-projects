import React from 'react'
import { Text, View } from 'react-native'

const EmptyGroup = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#002b36" }}>
            <Text style={{ color: 'white', fontSize: 36 }}> Empty Group List</Text>
        </View>
    )
};
export default EmptyGroup;