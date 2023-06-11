import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousels from '../../utils/Carousels';
import AssetResource from '../../utils/AssetResource';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={AssetResource.buddha1}
          style={{width: wp('100%'), height: hp('60%')}}
        />
      </View>
      <View style={{backgroundColor: 'orange'}}>
        <View
          style={{
            marginVertical: 12,
            height: hp('30%'),
            width: wp('100%'),
            alignItems: 'center',
          }}>
          <Carousels />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
