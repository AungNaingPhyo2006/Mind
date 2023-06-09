import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import General from '../screens/general/GeneralList';
const Stack = createStackNavigator();

const GeneralStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="General" component={General} />
    </Stack.Navigator>
  );
};

export default GeneralStack;

const styles = StyleSheet.create({});
