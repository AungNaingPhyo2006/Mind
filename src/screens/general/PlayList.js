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
import Player from './Player';
const PlayerList = ({plistModal, setPlistModal, data}) => {
  const {lang} = useAppState(state => ({
    lang: state.lang,
  }));

  const {t} = useTranslation();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={plistModal}
        onRequestClose={() => {
          setPlistModal(!plistModal);
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
              {/* <View style={{}}>
                <Text style={styles.modalText}>PlayList</Text>
              </View>

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setPlistModal(!plistModal)}>
                <XCircle size={18} color="white" />
              </Pressable> */}
            </View>

            {/* <===================> */}
            <Player myTracks={data} setPlistModal={setPlistModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlayerList;

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
});
