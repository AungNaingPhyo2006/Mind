import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VideoScreen from '../screens/youtube/VideoScreen';
import DhammaList from '../screens/dhamma/DhammaList';
import SayarDaw from '../screens/dhamma/SayarDaw';

const Stack = createStackNavigator();

const DhammaStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SayarDaw" component={SayarDaw} />
      {/* <Stack.Screen name="DhammaList" component={DhammaList} /> */}
    </Stack.Navigator>
  );
};

export default DhammaStack;

const styles = StyleSheet.create({});
