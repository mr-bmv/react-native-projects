import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRandomContext } from '../context/RandomContext';
import { Picker } from '@react-native-picker/picker';

//  components
import PickerNationalityList from '../components/PickerNationalityList';
import { COLORS, width } from '../constants/colors';

const FilterScreen = ({ navigation }) => {
  const [isGender, setGender] = React.useState({
    gender: { male: false, female: false },
    nat: false
  });

  const { state, filterPeople, theme } = useRandomContext();

  const backgroundColor = state.darkTheme ? 'black' : 'white';

  const onFilter = (gender) => {
    setGender((isSelected) => ({ ...isSelected, gender: { ...isSelected.gender, [gender]: !isSelected.gender[gender] } }))
  }

  const onNationality = (nat) => {
    setGender((state) => ({ ...state, nat }))
  }

  const postFilterList = () => {
    filterPeople(isGender)
    navigation.navigate('HomeTab', {
      screen: 'List',
      // params: {
      //   screen: 'SearchResults',
      // },
    })


  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor, }]} >
      < View style={[styles.frame, { backgroundColor: theme.backgroundColorLight }]} >
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
            <Text style={[styles.checkBoxText, { color: theme.mainText, }]}>Male</Text>
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
            <Text style={[styles.checkBoxText, { color: theme.mainText, }]}>Female</Text>
          </Pressable>
        </View>
        {/* Picker */}
        <View>
          <Text style={[styles.pickerText, { color: theme.mainText, }]}>Nationality</Text>
          <PickerNationalityList onNationality={onNationality} nat={isGender.nat} />
        </View>
        {/* Submit Button */}
        <Pressable
          style={[styles.button, { backgroundColor: theme.primary, }]}
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
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
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
    fontSize: 22,
    marginLeft: 8,
  },
  label: {
    margin: 8,
  },
  button: {
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
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 5
  }
});


export default FilterScreen;