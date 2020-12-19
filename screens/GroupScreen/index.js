import React from 'react'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native'
import { COLORS, width } from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TempGroup = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.row}>
            <Pressable
                style={styles.checkBox}
                onPress={() => navigation.navigate("Group Details")}
            >
                <Text style={styles.title}>Group Name</Text>
            </Pressable>
            <View style={styles.info}>
                <Text style={styles.qty}>QTY</Text>
                {/* logic to select individual group */}
                <Pressable
                    style={styles.checkBox}
                    onPress={() => console.warn("Delete group")}
                >
                    <MaterialIcons name="delete-outline" size={34} color={COLORS.dark.warning} />
                </Pressable>
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