import * as eva from '@eva-design/eva';
import AsyncStorage from '@react-native-community/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import React, {FC, Suspense, useEffect} from 'react';
import {Alert, LogBox, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Splashscreen from './components/Splashscreen';
import {persistor, store} from './redux/store';
import {RootStackScreen} from './routes';
import {isMountedRef, navigationRef} from './routes/navigationUtils';
import theme, {globalStyle} from './theme';
import {palette} from './theme/colors';

enableScreens();
LogBox.ignoreAllLogs();
const App: FC = () => {
  const netInfo = useNetInfo();
  if (netInfo.isConnected === false) {
    Alert.alert('Lỗi', 'Không có kết nối mạng');
  }

  return (
    <Suspense fallback={<Splashscreen />}>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Provider store={store}>
          <PersistGate loading={<Splashscreen />} persistor={persistor}>
            <SafeAreaProvider>
              <NavigationContainer ref={navigationRef}>
                <StatusBar
                  barStyle="dark-content"
                  backgroundColor={palette.WHITE}
                />
                <Layout style={[globalStyle.flex1, globalStyle.justifyCenter]}>
                  <RootStackScreen />
                </Layout>
              </NavigationContainer>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </Suspense>
  );
};

export default App;
