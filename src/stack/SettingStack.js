import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageChange from '../screens/language/LanguageChange';
import useAppState from '../constant/Zustand';
import {changeLanguage} from 'i18next';
const Stack = createStackNavigator();

const SettingStack = () => {
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));
  useEffect(() => {
    changeLanguage(lang);
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LanguageChange" component={LanguageChange} />
    </Stack.Navigator>
  );
};

export default SettingStack;

const styles = StyleSheet.create({});
