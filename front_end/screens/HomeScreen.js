import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import TopPicks from '../component/TopPicks';
import TodaysFeatured from '../component/TodaysFeatured';
import TiffinNearbyYou from '../component/TiffinNearbyYou';
import ImageCorouselData from '../data/ImageCorouselData';
import ImageCorousel from '../component/ImageCorousel';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <View>
        <ImageCorousel />
      </View>
      <View>
        <View
          style={{
            height: 6,
            backgroundColor: '#ebebeb',
            marginTop: 35,
          }}></View>
        <TopPicks />
      </View>
      <View>
        <View
          style={{
            height: 6,
            backgroundColor: '#ebebeb',
            marginTop: 35,
          }}></View>
        <TodaysFeatured />
      </View>
      <View>
        <View
          style={{
            height: 6,
            backgroundColor: '#ebebeb',
            marginTop: 35,
          }}></View>
        <TiffinNearbyYou />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
