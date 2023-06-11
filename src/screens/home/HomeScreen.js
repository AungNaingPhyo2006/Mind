import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextSlider from '../../utils/TextSlider';

const HomeScreen = ({navigation}) => {
  const texts = ['Text 1 loram', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginHorizontal: 12,
  },
});
