import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import TopPicksComponent from './TopPicksComponent';
import TopPicksData from '../data/TopPicksData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TopPicks = () => {
  return (
    <View style={{marginTop: 17}}>
      <View
        style={{
          padding: 5,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="like1" size={20} color={'#29f0be'} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}>
            Top Picks For You
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#29f0be', fontSize: 13}}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 4, marginTop: 7}}>
        <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          horizontal
          data={TopPicksData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TopPicksComponent
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

export default TopPicks;
