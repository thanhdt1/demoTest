import {colorAPP} from '@theme/colors';
import React, {FC, memo, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
interface IItemList {
  coin?: string;
  price?: string;
}
const ItemList: FC<IItemList> = ({coin, price}) => {
  const [status, setStatus] = useState(false);
  return (
    <TouchableOpacity>
      <View style={[styles.view_item]}>
        <Image source={require('')} style={styles.image_item} />
        <View style={styles.content_view}>
          <View style={styles.view_title}>
            <Text style={{fontSize: 18, color: colorAPP.TEXT_TITLE}}>
              {coin}
            </Text>
            <Text style={styles.text_price}>${price}</Text>
          </View>
          <View style={styles.view_title}>
            <Text>{coin}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default memo(ItemList);
