import {palette} from '@theme/colors';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
const LoadingView = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={palette.THEME} />
    </View>
  );
};
export default LoadingView;
