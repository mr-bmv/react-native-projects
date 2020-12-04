import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { nationality } from "../assets/mapping"

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
            style={{ height: 50 }}
            onValueChange={(nationality) => onNationality(nationality)}>
            {natList}
        </Picker>
    )
};

export default PickerNationalityList;