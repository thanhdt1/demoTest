import {colorAPP, palette} from '@theme/colors';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  view_item: {
    height: 90,
    width: width - 20,
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: 'lightgray',
    marginHorizontal: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  text_title: {
    fontSize: 14,
  },
  image_item: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  content_view: {
    flex: 1,
    marginRight: 20,
    flexDirection: 'column',
    marginVertical: 20,
  },
  view_title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text_price: {
    fontSize: 18,
    color: colorAPP.TEXT_TITLE,
    flex: 1,
    textAlign: 'right',
  },
});

export default styles;
