import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Easing,
} from 'react-native';
import useAppState from '../../constant/Zustand';
import VideoScreen from '../youtube/VideoScreen';
import RefreshIcon from '../../components/RefreshIcon';
import {ArrowLeftCircle} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {
  english,
  entertainment,
  foodId1,
  foodId2,
  health,
  japanese,
  lecture,
} from '../../utils/VideoData';
import DhammaModal from '../dhamma/DhammaModal';
import AssetResource from '../../utils/AssetResource';
import {Badge} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {convertMmDigit} from '../../utils/MyanmarNum';

const GeneralList = () => {
  const {t} = useTranslation();
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
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
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    // inputRange: [0, 1],
    // outputRange: ['0deg', '360deg'],
    inputRange: [0, 0],
    outputRange: ['0deg', '0deg'],
  });

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <DhammaModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        videoIds={data}
      />
      {/* <========modal end=======> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'darkred',
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white'}}>{t('general')}</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginVertical: 15,
          marginHorizontal: 10,
          borderRadius: 30,
          paddingVertical: 12,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(foodId1);
            }}>
            <Text style={{color: 'white'}}>{t('recipes')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? foodId1.length : convertMmDigit(foodId1.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(foodId2);
            }}>
            <Text style={{color: 'white'}}>{t('cake')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? foodId2.length : convertMmDigit(foodId2.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(health);
            }}>
            <Text style={{color: 'white'}}>{t('healthy')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? health.length : convertMmDigit(health.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(lecture);
            }}>
            <Text style={{color: 'white'}}>{t('lecture')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? lecture.length : convertMmDigit(lecture.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(japanese);
            }}>
            <Text style={{color: 'white'}}>{t('japanese')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? japanese.length : convertMmDigit(japanese.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(english);
            }}>
            <Text style={{color: 'white'}}>{t('english')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en' ? english.length : convertMmDigit(english.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
        <View style={styles.container}>
          <Animated.View
            style={{...styles.imgContainer, transform: [{rotate: spin}]}}>
            <Image source={AssetResource.wheel} style={styles.imageStyle} />
          </Animated.View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(entertainment);
            }}>
            <Text style={{color: 'white'}}>{t('entertainment')}</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'pink',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {lang == 'en'
                ? entertainment.length
                : convertMmDigit(entertainment.length)}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <======================> */}
      </ScrollView>
    </View>
  );
};

export default GeneralList;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 9,
  },

  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
    marginHorizontal: 9,
  },
  txtContainer: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
