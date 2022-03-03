import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import TodaysFeaturedComponent from './TodaysFeaturedComponent';
import TodaysFeaturedData from '../data/TodaysFeaturenData';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TodaysFeatured = () => {
  return (
    <View style={{marginTop: 17}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 5,
          }}>
          Most Loved Curations 😍
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#29f0be', fontSize: 13}}>See All</Text>
        </TouchableOpacity>
        {/* <FontAwesome5 name="grin-hearts" size={22} color={'#29f0be'} /> */}
      </View>
      <View style={{paddingHorizontal: 8, marginTop: 15}}>
        <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          horizontal
          data={TodaysFeaturedData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TodaysFeaturedComponent
              imageUri={item.imageUri}
              name={item.name}
              rating={item.rating}
              tod={item.tod}
              price={item.price}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TodaysFeatured;
