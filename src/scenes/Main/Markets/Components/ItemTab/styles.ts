import {colorAPP, palette} from '@theme/colors';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  view_item: {
    height: 35,
    width: 90,
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginHorizontal: 3,
    justifyContent: 'center',
  },
  text_title: {
    fontSize: 14,
  },
});

export default styles;
