import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DoorClosed, Pointer, XCircle} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useAppState from '../../constant/Zustand';
import {convertMmDigit} from '../../utils/MyanmarNum';
import Player from './Player';
import PlayerList from './PlayList';
import {patthana, test, test1, test2, test3} from '../../utils/Tracks';

const PlayerController = ({pcontModal, setPcontModal}) => {
  const [plistModal, setPlistModal] = useState(false);
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));

  const {t} = useTranslation();
  const [data, setData] = useState(null);
  // <=============>
  // const shuffle = () => {
  //   const data = [1, 2, 3, 4, 5];

  //   let index = data.length,
  //     myIndex,
  //     myData;

  //   while (index != 0) {
  //     myIndex = Math.floor(Math.random() * index);
  //     index -= 1;

  //     myData = data[index];
  //     data[index] = data[myIndex];
  //     data[myIndex] = myData;
  //   }

  //   console.log('Suffle===>', data[++index]); //[myIndex--]

  //   return data;
  // };

  // <===============>
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={pcontModal}
        onRequestClose={() => {
          setPcontModal(!pcontModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: '100%',
                padding: 15,
                // backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{}}>
                <Text style={styles.modalText}>{t('paritta')}</Text>
              </View>

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setPcontModal(!pcontModal)}>
                <XCircle size={18} color="white" />
              </Pressable>
            </View>

            {/* <Pointer size={18} color="white" /> */}

            {/* <=========ပဌာန်း==========> */}
            <ScrollView style={{marginVertical: 1}}>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.txtContainer}
                  onPress={() => {
                    setPlistModal(!plistModal);
                    setData(patthana);
                  }}>
                  <Text style={styles.txtStyle}>{t('patthana')}</Text>
                </TouchableOpacity>
              </View>
              {/* <===========ပရိတ်============> */}
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.txtContainer}
                  onPress={() => {
                    setPlistModal(!plistModal);
                    setData(test2);
                  }}>
                  <Text style={styles.txtStyle}>{t('paritta')}(မင်းကွန်း)</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.txtContainer}
                  onPress={() => {
                    setPlistModal(!plistModal);
                    setData(test3);
                  }}>
                  <Text style={styles.txtStyle}>{t('paritta')}(ဖားအောက်)</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.txtContainer}
                  onPress={() => {
                    setPlistModal(!plistModal);
                    setData(test);
                  }}>
                  <Text style={styles.txtStyle}>
                    {t('paritta')}(အရှင်ဥတ္တရ)
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <===========နမက္ကာရ============> */}
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.txtContainer}
                  onPress={() => {
                    setPlistModal(!plistModal);
                    setData(test1);
                  }}>
                  <Text style={styles.txtStyle}>{t('namakkarra')}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            {/* <=======================> */}
            <PlayerList
              plistModal={plistModal}
              setPlistModal={setPlistModal}
              data={data}
            />
            {/* <Player myTracks={patthana} setPcontModal={setPcontModal} /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlayerController;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    padding: 6,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 9,
  },
  txtContainer: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginHorizontal: 12,
  },
  txtStyle: {
    color: 'white',
    padding: 9,
  },
});
