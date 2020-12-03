import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useRandomContext } from '../context/RandomContext';

const FilterScreen = ({ navigation }) => {
    const [isGender, setGender] = React.useState({
        gender: { male: false, female: false },
        nat: false
    });

    const { getByGender } = useRandomContext();

    const onFilter = (gender) => {
        setGender((isSelected) => ({ ...isSelected, gender: { ...isSelected.gender, [gender]: !isSelected[gender] } }))
    }

    const postFilterList = () => {
        getByGender(isGender.gender)
        console.log('isGender - ', isGender)
        navigation.navigate('Main List')
    }

    return (
        < View style={styles.container} >
            <View style={styles.checkboxContainer}>
                <CheckBox
                    disabled={false}
                    value={isGender.male}
                    onValueChange={() => onFilter('male')}
                />
                <Text>Male</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    disabled={false}
                    value={isGender.female}
                    onValueChange={() => onFilter('female')}
                />
                <Text>Female</Text>
            </View>

            <Button title="Filter List" onPress={postFilterList} />
        </ View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 200,
        margin: 200
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});


export default FilterScreen;