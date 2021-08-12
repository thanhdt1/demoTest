import {colorAPP, palette} from '@theme/colors';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  view_item: {
    alignItems: 'center',
  },
  view_item_list: {
    alignItems: 'center',
    marginVertical: 5,
  },
  load_view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  header_view: {
    height: 60,
    width: width - 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text_header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: colorAPP.TEXT_TITLE,
  },
  view_search: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  text_input: {
    height: 40,
    width: '100%',
    paddingHorizontal: 20,
    fontSize: 14,
    borderColor: 'lightgray',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  menu_view: {
    width: width - 20,
    height: 45,
  },
});

export default styles;
