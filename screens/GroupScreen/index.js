import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native'
import { COLORS, width } from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const TempGroup = () => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>Group Name</Text>
            <View style={styles.info}>
                <Text style={styles.qty}>QTY</Text>
                {/* logic to select individual group */}
                {
                    false ?
                        <Ionicons name="square" size={36} color={COLORS.dark.primary} /> :
                        <Ionicons name="square-outline" size={36} color={COLORS.dark.primary} />
                }
            </View>
        </View>
    )
}

const GroupScreen = () => {

    return (
        <View style={[styles.container, { backgroundColor: "#002b36" }]}>
            <ScrollView >
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
                <TempGroup />
            </ScrollView>
        </View>
    )
};
export default GroupScreen;

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