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
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AssetResource from '../../utils/AssetResource';
import {Badge} from 'react-native-paper';

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
} from '../../utils/VideoData';
import DhammaModal from './DhammaModal';

const SayarDaw = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const toggleVisible = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.centeredView}>
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
        <Text style={{color: 'white'}}>ဓမ္မကထိက ဆရာတော်များ</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_1} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(videoId1);
            }}>
            <Text style={{color: 'white'}}>ဖားအောက်တောရ ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId1.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_2} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId2);
            }}>
            <Text style={{color: 'white'}}>ပါမောက္ခချုပ် ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId2.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_3} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId3);
            }}>
            <Text style={{color: 'white'}}>သီတဂူ ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId3.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_4} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId4);
            }}>
            <Text style={{color: 'white'}}>ကြာနီကန် ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId4.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_5} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId5);
            }}>
            <Text style={{color: 'white'}}>ဆရာတော် ဦးသုမင်္ဂလ</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId5.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_6} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId6);
            }}>
            <Text style={{color: 'white'}}>ဖြူး ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId6.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_7} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId7);
            }}>
            <Text style={{color: 'white'}}>ဆရာတော် ဦးဇောတိက</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId7.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_8} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId8);
            }}>
            <Text style={{color: 'white'}}>သစ္စာရွှေစည် ဆရာတော်</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId8.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image source={AssetResource.dhamma_9} style={styles.imageStyle} />
          </View>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setModalVisible(!modalVisible);
              setData(videoId9);
            }}>
            <Text style={{color: 'white'}}>ဘဒ္ဒန္တတေဇောသာရ</Text>
            <Badge
              style={{
                position: 'absolute',
                top: -9,
                right: 45,
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {videoId9.length}
            </Badge>
          </TouchableOpacity>
        </View>
        {/* <====================> */}
      </ScrollView>
    </View>
  );
};

export default SayarDaw;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 9,
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
    backgroundColor: 'blue',
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
