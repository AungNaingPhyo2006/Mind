import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShortList from '../screens/short/ShortList';
const Stack = createStackNavigator();

const ShortStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShortList" component={ShortList} />
    </Stack.Navigator>
  );
};

export default ShortStack;

const styles = StyleSheet.create({});
