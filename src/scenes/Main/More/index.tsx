import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
export interface userDataResponseType {
  api_token: string;
}

const MoreScreen = ({navigation}) => {
  const onLogout = async () => {
    await AsyncStorage.removeItem('api_token');
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.contain_view}>
      <Text style={styles.text_screen}>MoreScreen</Text>
    </View>
  );
};

export default MoreScreen;
