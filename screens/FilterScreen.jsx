import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRandomContext } from '../context/RandomContext';
import { Picker } from '@react-native-picker/picker';
import { nationality } from "../assets/mapping";

//  components
import PickerNationalityList from '../components/PickerNationalityList';
import { COLORS, width } from '../constants/colors';

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
    <View style={styles.container} >
      < View style={styles.frame} >
        <View style={styles.genderFrame}>
          <Pressable
            style={styles.checkBox}
            onPress={() => onFilter('male')}
          >
            {
              isGender.gender.male ?
                <Ionicons name="square" size={36} color={COLORS.dark.primary} /> :
                <Ionicons name="square-outline" size={36} color={COLORS.dark.primary} />
            }
            <Text style={styles.checkBoxText}>Male</Text>
          </Pressable>

          <Pressable
            style={styles.checkBox}
            onPress={() => onFilter('female')}
          >
            {
              isGender.gender.female ?
                <Ionicons name="square" size={36} color={COLORS.dark.primary} /> :
                <Ionicons name="square-outline" size={36} color={COLORS.dark.primary} />
            }
            <Text style={styles.checkBoxText}>Female</Text>
          </Pressable>
        </View>
        {/* Picker */}
        <View>
          <Text style={styles.pickerText}>Nationality</Text>
          <PickerNationalityList onNationality={onNationality} nat={isGender.nat} />
        </View>
        {/* Submit Button */}
        <Pressable
          style={styles.button}
          onPress={postFilterList}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </ View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    backgroundColor: COLORS.dark.backgroundColorLight,
    justifyContent: "space-between",
    width: width - 30,
    height: 400,
    borderRadius: 20
  },
  genderFrame: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: "center"
  },
  checkBoxText: {
    color: COLORS.dark.mainText,
    fontSize: 22,
    marginLeft: 8,

  },
  label: {
    margin: 8,
  },
  button: {
    backgroundColor: COLORS.dark.primary,
    paddingVertical: 5,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 36,
    color: "#FFF"
  },
  pickerText: {
    color: COLORS.dark.mainText,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom:5
  }
});


export default FilterScreen;