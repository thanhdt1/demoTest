import {fonts} from '../../theme/fonts';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  text_toat: {color: 'white', fontSize: 18, backgroundColor: '#545454'},
  login_viewInput: {
    height: 50,
    width: width - 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  load_view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  login_itext: {
    fontSize: 14,
    marginHorizontal: 5,
    color: '#fff',
    fontFamily: 'notoRegular',
  },
  view_contain: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},

  icon_input: {
    height: 25,
    width: 35,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  icon_eye: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  view_check: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    height: 50,
  },
  view_check_icon: {
    flexDirection: 'row',
    marginLeft: -5,
    alignItems: 'center',
  },
  text_check: {
    marginLeft: -10,
    fontSize: 14,
    color: '#fff',
    fontFamily: fonts.regularKK,
  },
  forgot_pass: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  login_inputText: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#fff',
  },
  view_button: {
    height: 50,
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDCFFF',
    borderRadius: 10,
    marginTop: 80,
  },
  btn_load: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  text_btn: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5073F2ff',
    fontWeight: 'bold',
  },
  image_logo: {
    height: 80,
    width: (2 * width) / 3,
    resizeMode: 'center',
    marginTop: 60,
  },
  text_copyright: {
    fontSize: 14,
    color: '#fff',
    marginTop: 30,
    fontFamily: fonts.regularKK,
  },
  view_language: {
    height: 30,
    width: width,
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_error: {
    color: 'red',
  },
  container_login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default styles;
