import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import LoginPage from '../scenes/Loginpage';
import More from '../scenes/Main/More';
import Wallets from '../scenes/Main/Wallets';
import Markets from '../scenes/Main/Markets';
import Portfolio from '../scenes/Main/Portfolio';
import Home from '../scenes/Main/Home';
import SplashScreen from '../scenes/SplashScreen';
import {routeOverlayOption} from './routeOptions';
import {colorAPP} from '@theme/colors';
var {width, height} = Dimensions.get('screen');
const ratio = width / height;
const isIPAD = ratio > 0.72 ? true : false;
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const AusthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MarketStack = createStackNavigator();
const WalletsStack = createStackNavigator();
const PortfolioStack = createStackNavigator();
const MoreStack = createStackNavigator();

const MainStackScreen: FC = () => {
  return (
    <AusthStack.Navigator initialRouteName={'Auth'}>
      <AusthStack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </AusthStack.Navigator>
  );
};
const HomeScreen: FC = () => {
  return (
    <HomeStack.Navigator initialRouteName={'Home'}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </HomeStack.Navigator>
  );
};
const MarketScreen: FC = () => {
  return (
    <MarketStack.Navigator initialRouteName={'Markets'}>
      <MarketStack.Screen
        name="Markets"
        component={Markets}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MarketStack.Navigator>
  );
};
const PortfolioScreen: FC = () => {
  return (
    <PortfolioStack.Navigator initialRouteName={'Portfolio'}>
      <PortfolioStack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </PortfolioStack.Navigator>
  );
};
const MoreScreen: FC = () => {
  return (
    <MoreStack.Navigator initialRouteName={'More'}>
      <MoreStack.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MoreStack.Navigator>
  );
};
const WalletsScreen: FC = () => {
  return (
    <WalletsStack.Navigator initialRouteName={'Wallets'}>
      <WalletsStack.Screen
        name="Wallets"
        component={Wallets}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </WalletsStack.Navigator>
  );
};

function LabelRouteName(index) {
  if (index == 'Home') {
    return 'Home';
  }
  if (index == 'Markets') {
    return 'Markets';
  }
  if (index == 'Wallets') {
    return 'Wallets';
  }
  if (index == 'Portfolio') {
    return 'Portfolio';
  }
  if (index == 'More') {
    return 'More';
  }
}

function IconsImageOn(index) {
  if (index == 'Home') {
    return <IconAntDesign name="home" size={26} color={colorAPP.TAB_FORCUS} />;
  }
  if (index == 'Markets') {
    return (
      <IconFontAwesome
        name="line-chart"
        size={26}
        color={colorAPP.TAB_FORCUS}
      />
    );
  }
  if (index == 'Wallets') {
    return (
      <IconIonicons
        name="wallet-outline"
        size={26}
        color={colorAPP.TAB_FORCUS}
      />
    );
  }
  if (index == 'Portfolio') {
    return (
      <IconEntypo name="briefcase" size={26} color={colorAPP.TAB_FORCUS} />
    );
  }
  if (index == 'More') {
    return (
      <IconEntypo
        name="dots-three-horizontal"
        size={26}
        color={colorAPP.TAB_FORCUS}
      />
    );
  }
}
function IconsImageOff(index) {
  if (index == 'Home') {
    return <IconAntDesign name="home" size={26} color={colorAPP.TAB_HINDE} />;
  }
  if (index == 'Markets') {
    return (
      <IconFontAwesome name="line-chart" size={26} color={colorAPP.TAB_HINDE} />
    );
  }
  if (index == 'Wallets') {
    return (
      <IconIonicons
        name="wallet-outline"
        size={26}
        color={colorAPP.TAB_HINDE}
      />
    );
  }
  if (index == 'Portfolio') {
    return <IconEntypo name="briefcase" size={26} color={colorAPP.TAB_HINDE} />;
  }
  if (index == 'More') {
    return (
      <IconEntypo
        name="dots-three-horizontal"
        size={26}
        color={colorAPP.TAB_HINDE}
      />
    );
  }
}
function getTabVisible(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'TaskScreen';
  let tabBarVisible = true;
  if (routeName == 'Login') {
    tabBarVisible = false;
  }
  return tabBarVisible;
}
const BottomTabApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#f5f5f5',
        inactiveBackgroundColor: '#f5f5f5',
        style: {height: 70, alignItems: 'center'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: isIPAD ? -0 : 10,
              }}>
              <View style={{width: 30, height: 30}}>
                {focused ? IconsImageOn(route.name) : IconsImageOff(route.name)}
              </View>
            </View>
          );
        },
        tabBarLabel: ({focused}) => {
          let color;
          color = focused ? colorAPP.TAB_FORCUS : colorAPP.TAB_HINDE;
          return route.name == 'Call' ? null : (
            <Text style={{color: color, fontSize: 14, marginBottom: 10}}>
              {LabelRouteName(route.name)}
            </Text>
          );
        },
        tabBarVisible: getTabVisible(route),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Markets" component={MarketScreen} />
      <Tab.Screen name="Wallets" component={WalletsScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={routeOverlayOption}
      initialRouteName={'SplashScreen'}>
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <RootStack.Screen
        name="Auth"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="App"
        component={BottomTabApp}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
