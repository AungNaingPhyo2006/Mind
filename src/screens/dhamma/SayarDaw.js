import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AssetResource from '../../utils/AssetResource';

import {videoIds} from '../../utils/VideoData';
import DhammaModal from './DhammaModal';

const SayarDaw = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleVisible = () => {
    setModalVisible(true);
  };
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.centeredView}>
      <DhammaModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        videoIds={videoIds}
      />
      {/* <========modal end=======> */}
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_1} style={styles.imageStyle} />
          </View>
          {/* <===========> */}
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_2} style={styles.imageStyle} />
          </View>
          {/* <===========> */}
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_3} style={styles.imageStyle} />
          </View>
        </View>
        {/* <=====Sub container end======> */}

        <View style={styles.subContainer}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_4} style={styles.imageStyle} />
          </View>
          {/* <===========> */}
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_5} style={styles.imageStyle} />
          </View>
          {/* <===========> */}
          <TouchableOpacity style={styles.imgContainer} onPress={toggleVisible}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              <Image
                source={AssetResource.dhamma_wheel}
                style={styles.imageStyle}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* <===============> */}
      </View>
    </View>
  );
};

export default SayarDaw;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginVertical: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 60,
  },
  subContainer: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  imgContainer: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
