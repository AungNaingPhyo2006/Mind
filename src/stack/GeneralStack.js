import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GeneralList from '../screens/general/GeneralList';
const Stack = createStackNavigator();

const GeneralStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GeneralList" component={GeneralList} />
    </Stack.Navigator>
  );
};

export default GeneralStack;

const styles = StyleSheet.create({});
