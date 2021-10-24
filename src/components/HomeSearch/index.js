import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute, useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const route = useRoute()
  const navigator = useNavigation();
  return (
    <View>
      {/* input box */}
      <Pressable onPress={()=>{
          navigator.navigate('DestinationSearch')
      }}>
      <View style={styles.inputBox}>
          <Text style={styles.inputText}>Where to</Text>
        </View>
</Pressable>
       
      {/* previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Mellanby Hall</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Mellanby Hall </Text>
      </View>
    </View>
  );
};

export default HomeSearch;
