import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageChange from '../screens/language/LanguageChange';
const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LanguageChange" component={LanguageChange} />
    </Stack.Navigator>
  );
};

export default SettingStack;

const styles = StyleSheet.create({});
