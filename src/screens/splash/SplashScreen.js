import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssetResource from '../../utils/AssetResource';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Image
        source={AssetResource.buddha}
        style={{width: 160, height: 160, borderRadius: 100}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
