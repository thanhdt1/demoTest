import {colorAPP} from '@theme/colors';
import React, {FC, memo, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
interface IFinish {
  title?: string;
  parentCallback: (a: any) => void;
}
const ItemTab: FC<IFinish> = ({title, parentCallback}) => {
  const [status, setStatus] = useState(false);
  const tabOn = () => {
    var dataRep = {idx: title};
    parentCallback(dataRep);
    setStatus(!status);
    console.log(title);
  };
  return (
    <TouchableOpacity onPress={() => tabOn()}>
      <View
        style={[
          styles.view_item,
          {
            backgroundColor: status ? colorAPP.MENU_ON : colorAPP.MENU_OFF,
          },
        ]}>
        <Text
          style={[
            styles.text_title,
            {color: status ? '#fff' : colorAPP.TEXT_TITLE},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default memo(ItemTab);
