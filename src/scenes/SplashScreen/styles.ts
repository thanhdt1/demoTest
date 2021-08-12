import {fonts} from '../../theme/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  text_toat: {
    color: 'white',
    fontSize: 18,
    backgroundColor: '#545454',
  },
  view_contain: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
  text_error: {
    color: 'red',
  },
  load_view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  container_login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default styles;
