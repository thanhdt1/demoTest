import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  BackHandler,
  ImageBackground,
} from 'react-native';
import NHCSafeAreaView from '../../components/NHCSafeAreaView';
import {CheckBox} from 'react-native-elements';
import styles from './styles';
const {width, height} = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import {useForm, Controller} from 'react-hook-form';
import * as ApiNoAuth from './../../helpers/apiNoAuth';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export interface userDataResponseType {
  token: string;
}
const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();

  useEffect(() => {
    checkDataLogin();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backActionExit,
      );
      return () => backHandler.remove();
    }, []),
  );

  const backActionExit = () => {
    Alert.alert('Note', 'Do you want to exit the application!'),
      [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ];
    return true;
  };

  const toastR = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState<any | null>('');
  const [password, setPassword] = useState<any | null>('');

  const navigation = useNavigation();

  //HANDLE LOGIN
  const onLogin = async data => {
    if (data.email == '' || data.password == '') {
      Alert.alert('Error', 'Username and password cannot be empty');
    } else {
      try {
        setLoading(true);
        const dataPush = {
          email: data.email,
          password: data.password,
        };
        console.log('datapush ===>', dataPush);
        const {response_data, code, message} = await ApiNoAuth.login(
          'mobile-api/auth/login',
          dataPush,
        );
        console.log('res ======>', response_data);

        if (code === 200) {
          setLoading(false);
          const user: userDataResponseType = response_data;
          await AsyncStorage.setItem('userInfo', JSON.stringify(response_data));
          if (response_data.status === 'success') {
            await AsyncStorage.setItem('api_token', response_data.data.token);
            if (check == true) {
              await AsyncStorage.setItem('email', data.email);
              await AsyncStorage.setItem('password', data.password);
            } else {
              AsyncStorage.removeItem('email');
              AsyncStorage.removeItem('password');
              email.current.clear();
              password.current.clear();
              setValue('email', '', {shouldValidate: false});
              setValue('password', '', {shouldValidate: false});
            }
            navigation.navigate('App', {screen: 'Home'});
          }
        } else if (code === 401) {
          setLoading(false);
          Alert.alert('Error', 'Incorrect username and password');
        } else if (code === 400) {
          setLoading(false);
          Alert.alert('Error', 'Incorrect username and password');
        } else {
          setLoading(false);
          Alert.alert('Error', 'An error has occurred');
        }
      } catch (error) {
        setLoading(false);
        Alert.alert('Error', 'An error has occurred');
      }
    }
  };
  const checkDataLogin = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    const emailAsy = await AsyncStorage.getItem('email');
    const passAsy = await AsyncStorage.getItem('password');
    console.log(emailAsy);
    console.log(passAsy);
    setValue('email', emailAsy, {shouldValidate: false});
    setValue('password', passAsy, {shouldValidate: false});
    if (emailAsy != null && passAsy != null) {
      setCheck(true);
    }
    if (api_token) {
      navigation.navigate('App', {screen: 'Home'});
    }
  };

  //CHANGE LANGUAGE
  // const switchLocaleToKR = useCallback(() => {
  //   i18n.changeLanguage('en');
  // }, [i18n]);
  // const switchLocaleToVN = useCallback(() => {
  //   i18n.changeLanguage('vn');
  // }, [i18n]);
  return (
    <NHCSafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container_login}>
            <ImageBackground
              source={require('../../assets/images/bg_login.png')}
              style={{flex: 1}}>
              {isLoading ? (
                <View style={styles.load_view}>
                  <ActivityIndicator size="large" color="#fff" />
                </View>
              ) : (
                <ScrollView>
                  <View style={styles.view_contain}>
                    <Image
                      source={require('../../assets/images/ic_logo.png')}
                      style={{
                        height: 80,
                        width: 80,
                        resizeMode: 'contain',
                        marginTop: 80,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 32,
                        color: '#fff',
                        marginTop: 20,
                        fontWeight: 'bold',
                      }}>
                      Sign In
                    </Text>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#fff',
                        marginTop: 20,
                      }}>
                      Please Sign in to continute
                    </Text>
                    <View style={[styles.login_viewInput, {marginTop: 60}]}>
                      <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                          <>
                            <Image
                              style={styles.icon_input}
                              resizeMethod={'scale'}
                              source={require('../../assets/images/ic_email.png')}
                            />
                            <TextInput
                              style={styles.login_inputText}
                              placeholder={'Email'}
                              onChangeText={value => onChange(value)}
                              value={value}
                              onBlur={onBlur}
                              placeholderTextColor={'#fff'}
                            />
                          </>
                        )}
                        name="email"
                        rules={{required: true}}
                        defaultValue={email}
                      />
                    </View>
                    <View style={[styles.login_viewInput, {marginTop: 10}]}>
                      <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                          <>
                            <Image
                              style={styles.icon_input}
                              resizeMethod={'scale'}
                              source={require('../../assets/images/ic_lock.png')}
                            />
                            <TextInput
                              secureTextEntry={show}
                              style={styles.login_inputText}
                              placeholder={'Password'}
                              onChangeText={value => onChange(value)}
                              value={value}
                              onBlur={onBlur}
                              placeholderTextColor={'#fff'}
                            />
                            <TouchableOpacity onPress={() => setShow(!show)}>
                              <Image
                                style={styles.icon_eye}
                                resizeMethod={'scale'}
                                source={require('../../assets/images/ic_eye.png')}
                              />
                            </TouchableOpacity>
                          </>
                        )}
                        name="password"
                        rules={{required: true}}
                        defaultValue={password}
                      />
                    </View>
                    <View
                      style={{
                        width: width - 40,
                        justifyContent: 'flex-start',
                        marginTop: 10,
                      }}>
                      {errors.email && (
                        <Text style={styles.text_error}>
                          Username and password cannot be empty!
                        </Text>
                      )}
                    </View>
                    <View style={styles.view_check}>
                      <View style={styles.view_check_icon}>
                        <Controller
                          control={control}
                          render={({field: {onChange, onBlur, value}}) => (
                            <>
                              <CheckBox
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checkedColor={'#fff'}
                                uncheckedColor={'#fff'}
                                onBlur={onBlur}
                                checked={check}
                                onPress={() => setCheck(!check)}
                              />
                              <Text style={styles.text_check}>
                                {'Remember me'}
                              </Text>
                            </>
                          )}
                          name="check_box"
                          rules={{required: false}}
                          defaultValue={check}
                        />
                      </View>
                      <TouchableOpacity style={{flex: 1}}>
                        <View style={styles.forgot_pass}>
                          <Text style={styles.text_check}>
                            Forgot your password?
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleSubmit(onLogin)}>
                      <View style={[styles.view_button]}>
                        {isLoading ? (
                          <View style={styles.btn_load}>
                            <ActivityIndicator size="large" color="#3678A3" />
                          </View>
                        ) : (
                          <Text style={styles.text_btn}>SIGN IN</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#fff',
                        }}>
                        Don’t have an account yet?
                      </Text>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 18,
                            color: '#fff',
                            fontWeight: 'bold',
                            marginHorizontal: 10,
                          }}>
                          SIGN UP
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              )}
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </NHCSafeAreaView>
  );
};

export default LoginPage;
