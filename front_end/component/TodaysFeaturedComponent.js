import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const TodaysFeaturedComponent = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#29f0be',
          borderRadius: 5,
          position: 'absolute',
          marginHorizontal: 40,
          paddingVertical: 3,
          bottom: '95%',
          left: '1%',
          width: 110,
        }}>
        <Text
          style={{
            fontWeight: '500',
            color: 'white',
            fontSize: 14,
            marginHorizontal: 4,
            // marginTop: 7,
          }}>
          {props.name}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: props.imageUri,
            }}
            style={{height: 110, width: 110, borderRadius: 16, margin: 10}}
          />
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="star" color={'yellow'} size={13} />
            <Text
              style={{
                color: 'black',
                marginHorizontal: 3,
                fontSize: 14,
                fontWeight: '500',
              }}>
              {props.rating}
            </Text>
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: '500',
              }}>
              Rate
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>- - - - -</Text>
          </View>

          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <Entypo name="stopwatch" size={13} color={'black'} />
            <Text style={{color: 'black', fontSize: 12, fontWeight: '500'}}>
              {props.tod} Min
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>- - - - -</Text>
          </View>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
              {'\u20B9'}
            </Text>
            <Text style={{color: 'black', fontSize: 12, fontWeight: '500'}}>
              {props.price}/-
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{alignItems: 'center', marginBottom: 13}}>
          <Text
            style={{
              fontWeight: '600',
              color: '#29f0be',
              fontSize: 20,
            }}>
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,

    backgroundColor: 'white',
    margin: 10,
    paddingBottom: 5,
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
});
export default TodaysFeaturedComponent;
