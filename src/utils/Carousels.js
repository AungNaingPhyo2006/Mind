import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import useAppState from '../constant/Zustand';
import {
  videoId1,
  videoId2,
  videoId3,
  videoId4,
  videoId5,
  videoId6,
  videoId7,
  videoId8,
  videoId9,
} from './VideoData';
import AssetResource from './AssetResource';
import {useTranslation} from 'react-i18next';
const Data = [
  {
    id: 1,
    color: 'red',
    title: 'paauk',
    image: AssetResource.dhamma_1,
  },
  {
    id: 2,
    color: 'green',
    title: 'vndml',
    image: AssetResource.dhamma_2,
  },
  {id: 3, color: 'blue', title: 'ttg', image: AssetResource.dhamma_3},
  {
    id: 4,
    color: 'red',
    title: 'knk',
    image: AssetResource.dhamma_4,
  },
  {
    id: 5,
    color: 'green',
    title: 'utmgl',
    image: AssetResource.dhamma_5,
  },
  {id: 6, color: 'blue', title: 'znpt', image: AssetResource.dhamma_6},
  {id: 7, color: 'red', title: 'ztk', image: AssetResource.dhamma_7},
  {
    id: 8,
    color: 'green',
    title: 'tsss',
    image: AssetResource.dhamma_8,
  },
  {id: 9, color: 'blue', title: 'bgsyd', image: AssetResource.dhamma_9},
];
// <=============================>
const Carousels = () => {
  const {t} = useTranslation();
  const {modalVisible, setModalVisible, data, setData} = useAppState(state => ({
    modalVisible: state.modalVisible,
    setModalVisible: state.setModalVisible,
    data: state.data,
    setData: state.setData,
  }));
  const handlePress = (id, title) => {
    switch (id) {
      case 1:
        setModalVisible(!modalVisible);
        setData(videoId1);
        break;
      case 2:
        setModalVisible(!modalVisible);
        setData(videoId2);
        break;
      case 3:
        setModalVisible(!modalVisible);
        setData(videoId3);
        break;
      case 4:
        setModalVisible(!modalVisible);
        setData(videoId4);
        break;
      case 5:
        setModalVisible(!modalVisible);
        setData(videoId5);
        break;
      case 6:
        setModalVisible(!modalVisible);
        setData(videoId6);
        break;
      case 7:
        setModalVisible(!modalVisible);
        setData(videoId7);
        break;
      case 8:
        setModalVisible(!modalVisible);
        setData(videoId8);
        break;
      case 9:
        setModalVisible(!modalVisible);
        setData(videoId9);
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Carousel
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: item.color,
                height: hp('30%'),
                width: wp('80%'),
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: wp('10%'),
                borderRadius: 20,
                elevation: 3,
              }}
              onPress={() => handlePress(item.id, item.title)}>
              <Image
                source={item.image}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 150,
                  borderWidth: 3,
                  borderColor: 'white',
                }}
              />
              <Text style={{color: 'white', marginVertical: 6}}>
                {t(`${item.title}`)}
              </Text>
            </TouchableOpacity>
          )}
          sliderWidth={wp('100%')}
          itemWidth={wp('100%')}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />
      </View>
    </View>
  );
};

export default Carousels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
