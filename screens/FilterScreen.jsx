import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useRandomContext } from '../context/RandomContext';
import { Picker } from '@react-native-picker/picker';
import { nationality } from "../assets/mapping";

//  components
import PickerNationalityList from '../components/PickerNationalityList';

const FilterScreen = ({ navigation }) => {
  const [isGender, setGender] = React.useState({
    gender: { male: false, female: false },
    nat: false
  });

  const { state, filterPeople } = useRandomContext();

  const backgroundColor = state.darkTheme ? 'black' : 'white';

  const onFilter = (gender) => {
    setGender((isSelected) => ({ ...isSelected, gender: { ...isSelected.gender, [gender]: !isSelected.gender[gender] } }))
  }

  const onNationality = (nat) => {
    setGender((state) => ({ ...state, nat }))
  }

  const postFilterList = () => {
    filterPeople(isGender)
    navigation.navigate('Main List')
  }

  return (
    <View style={{ flex: 1, backgroundColor }}>
      < View style={styles.container} >
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={isGender.gender.male}
            onValueChange={() => onFilter('male')}
          />
          <Text>Male</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={isGender.gender.female}
            onValueChange={() => onFilter('female')}
          />
          <Text>Female</Text>
        </View>

        <PickerNationalityList onNationality={onNationality} nat={isGender.nat} />
        <Button title="Filter List" onPress={postFilterList} />
      </ View>
    </View>

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