import {Settings, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import VideoScreen from '../screens/youtube/VideoScreen';
import CustomVideo from '../screens/youtube/CustomVideo';
import LoginScreen from '../components/RefreshIcon';
import HomeStack from '../stack/HomeStack';
import GeneralStack from '../stack/GeneralStack';
import ShortStack from '../stack/ShortStack';
import SettingStack from '../stack/SettingStack';
import DhammaStack from '../stack/DhammaStack';
import {Badge} from 'react-native-paper';
import {
  Camera,
  FerrisWheel,
  Home,
  ListVideo,
  Settings2,
  Video,
} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={t('home')}>
        <Tab.Screen
          name={t('dhamma')}
          component={DhammaStack}
          options={{
            // tabBarBadge: 3,

            tabBarIcon: ({color, size}) => (
              <>
                <FerrisWheel color={color} size={size} />
                {/* <Badge style={{position: 'absolute', top: -5, left: 45}}>
                  {videoIds.length}
                </Badge> */}
              </>
            ),
          }}
        />

        <Tab.Screen
          name={t('general')}
          component={GeneralStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <ListVideo color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={t('home')}
          component={HomeStack}
          // options={{tabBarBadge: 3}}
          options={{
            tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={t('short')}
          component={ShortStack}
          options={{
            tabBarIcon: ({color, size}) => <Video color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={t('settings')}
          component={SettingStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Settings2 color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
