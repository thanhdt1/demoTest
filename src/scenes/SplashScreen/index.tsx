import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
const {width, height} = Dimensions.get('window');

export interface userDataResponseType {
  api_token: string;
}

const SplashScreen = () => {
  useEffect(() => {
    checkDataLogin();

    // checkDataLogin();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const checkDataLogin = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    const emailAsy = await AsyncStorage.getItem('email');
    const passAsy = await AsyncStorage.getItem('password');
    console.log(emailAsy);
    console.log(passAsy);

    if (api_token) {
      navigation.navigate('App', {screen: 'Home'});
    } else {
      setTimeout(() => {
        navigation.navigate('Auth', {screen: 'LoginPage'});
      }, 3500);
    }
  };
  return (
    <View style={styles.container_login}>
      <ImageBackground
        source={require('../../assets/images/bg_login.png')}
        style={{flex: 1}}>
        <View style={styles.load_view}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
