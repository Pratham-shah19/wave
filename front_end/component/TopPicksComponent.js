import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const TopPicksComponent = props => {
  return (
    <View style={styles.component}>
      <View>
        <Image
          source={{
            uri: props.imageUri,
          }}
          style={{height: 120, width: 120, borderRadius: 16}}
        />
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00ebaf', '#45d6b2', '#8ff7dd']}
        style={{
          position: 'absolute',
          left: '47%',
          bottom: '85%',
          backgroundColor: '#29f0be',
          flexDirection: 'row',
          borderRadius: 5,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 2,
          paddingHorizontal: 4,
        }}>
        <MaterialCommunityIcons name="shield-star" size={14} color="white" />
        <Text
          style={{
            color: 'white',
            marginHorizontal: 1,
            fontSize: 10,
            fontWeight: 'bold',
          }}>
          Most Buyed
        </Text>
      </LinearGradient>

      <View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'black',
            }}>
            {props.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 3,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="star" size={14} color="yellow" />
            <Text style={{color: 'black', fontSize: 12, marginHorizontal: 5}}>
              {props.rating}
            </Text>
          </View>
          <View style={{position: 'absolute', left: '45%', bottom: '6%'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'black',
              }}>
              .
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 12}}>{props.tod} mins</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 4}}>
          <Text style={{color: 'black', fontSize: 15}}>
            {'\u20B9'}
            {props.price}/-
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    height: 199,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 10,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});

export default TopPicksComponent;
