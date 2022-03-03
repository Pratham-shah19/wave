import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={{padding: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#29f0be', fontWeight: 'bold'}}>DELIVER TO</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'gray', fontSize: 13}}>
              Mota Bazaar, Vvnagar
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={17}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="ios-notifications-outline"
            size={26}
            color={'#29f0be'}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 14}}>
        <Text style={{color: 'black', fontSize: 17}}>Hey Het, </Text>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
          Good Afternoon!
        </Text>
      </View>
      {/* <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,
          elevation: 19,
        }}>
        <TextInput placeholder="Search dishes, restaurant">
          <Text>h</Text>
        </TextInput>
      </View> */}
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Search dishes, restaurant"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  searchIcon: {
    padding: 7,
  },
  input: {
    flex: 1,
    // paddingTop: 7,
    // paddingRight: 0,
    // paddingBottom: 7,
    paddingLeft: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default Header;
