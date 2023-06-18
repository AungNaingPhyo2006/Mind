import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import {DoorClosed, XCircle} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useAppState from '../../constant/Zustand';
import {convertMmDigit} from '../../utils/MyanmarNum';
const CountModal = ({countModal, setCountModal}) => {
  const {t} = useTranslation();
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={countModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setCountModal(!countModal);
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
                <Text style={styles.modalText}>{t('count')}</Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setCountModal(!countModal)}>
                <XCircle size={18} color="white" />
              </Pressable>
            </View>
            {/* <===================> */}
            <View
              style={{
                flex: 1,
                // marginHorizontal: 28,
                // paddingVertical: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: wp('60%'),
                  height: hp('5%'),
                  marginVertical: 18,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'blue'}}>
                  {lang == 'en' ? 100 : convertMmDigit(100)}-{t('times')}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'yellow',
                  width: wp('60%'),
                  height: hp('30%'),
                  borderRadius: 150,
                  borderColor: 'white',
                  borderWidth: 3,
                }}></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CountModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
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
});
