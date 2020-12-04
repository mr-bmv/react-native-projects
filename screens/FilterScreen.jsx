import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useRandomContext } from '../context/RandomContext';
import { Picker } from '@react-native-picker/picker';

const FilterScreen = ({ navigation }) => {
    const [isGender, setGender] = React.useState({
        gender: { male: false, female: false },
        nat: false
    });

    const { filterPeople } = useRandomContext();

    const onFilter = (gender) => {
        setGender((isSelected) => ({ ...isSelected, gender: { ...isSelected.gender, [gender]: !isSelected[gender] } }))
    }

    const onNationality = (nat) => {
        setGender((isSelected) => ({ ...isSelected, nat }))
        console.log(isGender)
    }

    const postFilterList = () => {
        console.log('Data from filter - ', isGender)
        filterPeople(isGender)
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

            <Picker
                selectedValue={isGender.nat}
                style={{ height: 50, width: 100 }}
                onValueChange={(nationality) => onNationality(nationality)}>
                <Picker.Item label="Australia" value="au" />
                <Picker.Item label="Brazil" value="BR" />
                <Picker.Item label="Canada" value="CA" />
                <Picker.Item label="Denmark" value="DK" />
                <Picker.Item label="Finland" value="FI" />
                <Picker.Item label="France" value="FR" />
                <Picker.Item label="Germany" value="DE" />
                <Picker.Item label="Ireland" value="IE" />
                <Picker.Item label="Iran" value="IR" />
                <Picker.Item label="Norway" value="NO" />
                <Picker.Item label="Netherlands" value="NL" />
                <Picker.Item label="New Zealand" value="NZ" />
                <Picker.Item label="Spain" value="ES" />
                <Picker.Item label="Switzerland" value="CH" />
                <Picker.Item label="Turkey" value="TR" />
                <Picker.Item label="United Kingdom" value="GB" />
                <Picker.Item label="United States of America" value="US" />
            </Picker>
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