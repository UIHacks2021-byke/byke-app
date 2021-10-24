import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch'
const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
      <HomeMap />
      <HomeSearch />
      </ScrollView>
      
    </View>
  );
};

export default HomeScreen;
