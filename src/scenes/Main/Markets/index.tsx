import React, {Children, FC, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');
import * as ApiNoAuth from '../../../helpers/apiNoAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import EmptyComponent from '@components/EmptyComponet';
import LoadingView from '@components/LoadingView';
import {useNavigation} from '@react-navigation/native';
import {colorAPP} from '@theme/colors';
import {TextInput} from 'react-native-gesture-handler';
import ItemTab from './Components/ItemTab';
import ItemList from './Components/ItemList';
import {setContext} from 'redux-saga/effects';

const PAGE_SIZE = 20;
export interface userDataResponseType {
  api_token: string;
}

const MarketScreen: FC = () => {
  const navigation = useNavigation();
  const search = useRef<TextInput>(null);
  const [loading, setLoading] = React.useState(false);
  const [showSeach, setShowSearch] = React.useState(false);
  const [hasNextPage, setNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState(true);

  const [keyword, setKeyWord] = useState('');
  const fetchApiTransaction = async () => {
    setLoading(true);
    try {
      const response = await ApiNoAuth.get('mobile-api/market/getmarkets');
      console.log(response);
      setMenu(response.data || []);
      setLoading(false);
    } catch (error) {
      Alert.alert('Lỗi !!!', 'Đã có lỗi xảy ra!');
    }
  };
  const getList = async () => {
    setLoading(true);
    try {
      const response = await ApiNoAuth.get('public/v1/market/get-summaries');
      console.log(response);
      setDataList(response.data || []);
      setLoading(false);
    } catch (error) {
      Alert.alert('Lỗi !!!', 'Đã có lỗi xảy ra!');
    }
  };

  useEffect(() => {
    fetchApiTransaction();
    getList();
  }, [navigation]);

  const onSearch = () => {};
  const callbackFunction = childData => {
    console.log('---->callBack data:', childData);
  };
  const renderItemMenu = ({item}) => {
    return (
      <View style={styles.view_item}>
        <ItemTab title={item.title} parentCallback={callbackFunction} />
      </View>
    );
  };
  const renderItemList = ({item}) => {
    return (
      <View style={styles.view_item_list}>
        <ItemList coin={item.market} price={item.lastPrice} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FAFBFE'}}>
      {loading ? (
        <LoadingView />
      ) : (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.header_view}>
            <Text style={styles.text_header}>MARKETS</Text>
            <View style={styles.view_search}>
              {showSeach ? (
                <TextInput
                  ref={search}
                  style={styles.text_input}
                  placeholder={'BTC,USDT,...'}
                  value={keyword}
                  onChangeText={text => setKeyWord(text)}
                  onSubmitEditing={() => onSearch()}
                />
              ) : null}
            </View>
            <TouchableOpacity onPress={() => setShowSearch(!showSeach)}>
              <Icon
                name="search"
                size={26}
                color={colorAPP.TEXT_TITLE}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.menu_view}>
            <FlatList
              data={menu}
              extraData={menu}
              renderItem={renderItemMenu}
              keyExtractor={item => `key-${item.title}`}
              onEndReachedThreshold={0}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <FlatList
            data={dataList}
            extraData={dataList}
            renderItem={renderItemList}
            keyExtractor={item => `key-${item.marketId}`}
            onEndReachedThreshold={0}
            ListEmptyComponent={EmptyComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default MarketScreen;
