import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const {width: screenWidth} = Dimensions.get('window');

const TiffinNearbyYouComponent = props => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 20, marginVertical: 10}}>
      <View style={{flex: 1, alignContent: 'center'}}>
        <Image
          source={{
            uri: props.restaurantImage,
          }}
          style={{
            height: 100,
            width: 90,
            alignSelf: 'center',
            borderRadius: 10,
          }}></Image>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            borderRadius: 5,
            top: '73%',
            left: screenWidth - 339,
            backgroundColor: 'white',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: '#29f0be', fontWeight: 'bold', fontSize: 13}}>
            60% OFF
          </Text>
          <Text style={{color: '#29f0be', fontSize: 10}}>
            Upto {'\u20B9'}125
          </Text>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1f1f1f'}}>
            {props.restaurantName}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="star" size={15} color="#666563" />
            <Text
              style={{
                color: '#666563',
                fontSize: 12,
                marginLeft: 4,
                fontWeight: 'bold',
              }}>
              {props.rating}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginBottom: 8,
                color: '#666563',
                marginLeft: 6,
                fontWeight: 'bold',
              }}>
              .
            </Text>
            <Text
              style={{
                color: '#666563',
                fontSize: 12,
                marginLeft: 8,
                fontWeight: 'bold',
              }}>
              {props.timeTodeliver} mins
            </Text>
            <Text
              style={{
                marginBottom: 8,
                color: '#666563',
                marginLeft: 6,
                fontWeight: 'bold',
              }}>
              .
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: '500'}}>
            {props.category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TiffinNearbyYouComponent;
