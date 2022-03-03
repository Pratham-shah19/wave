import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TiffinNearbyYouComponent from './TiffinNearbyYouComponent';
import TiffinNearbyYouData from '../data/TiffinNearbyYouData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TiffinNearbyYou = () => {
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          marginHorizontal: 10,
        }}>
        <MaterialIcons name="restaurant" size={21} color={'#29f0be'} />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 8,
          }}>
          Tiffin Services Near You
        </Text>
      </View>
      <View>
        <FlatList
          data={TiffinNearbyYouData}
          renderItem={({item}) => (
            <TiffinNearbyYouComponent
              restaurantName={item.restaurantName}
              restaurantImage={item.restaurantImage}
              rating={item.rating}
              timeTodeliver={item.timeTodeliver}
              category={item.category}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TiffinNearbyYou;
