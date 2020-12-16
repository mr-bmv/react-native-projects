import React from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { nationality } from "../assets/mapping"
import { COLORS } from '../constants/colors';

const PickerNationalityList = ({ onNationality, nat }) => {

    const natList = Object.keys(nationality).map(key => {
        return (
            <Picker.Item key={key
            } label={nationality[key]} value={key} />
        )
    });

    return (
        <Picker
            selectedValue={nat}
            style={styles.container}
            onValueChange={(nationality) => onNationality(nationality)}
        >
            {natList}
        </Picker>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.dark.input,
        marginHorizontal: 20,
    },
})

export default PickerNationalityList;