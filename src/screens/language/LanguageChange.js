import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import useAppState from '../../constant/Zustand';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Check} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';
const LanguageChange = () => {
  const {t} = useTranslation();

  const {lang, setLang} = useAppState(state => ({
    lang: state.lang,
    setLang: state.setLang,
  }));
  useEffect(() => {
    console.log('lang', lang);
  }, [lang]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{...styles.box, backgroundColor: 'pink'}}
        onPress={() => {
          setLang('en');
        }}>
        <Text style={{color: 'white', fontSize: 14}}>English</Text>
        {lang === 'en' && <Check color="#514BC3" size={24} />}
      </TouchableOpacity>
      {/* mm btn */}
      <TouchableOpacity
        style={{...styles.box, backgroundColor: 'pink'}}
        onPress={() => {
          setLang('mm');
        }}>
        <Text style={{color: 'white', fontSize: 16}}>မြန်မာ</Text>
        {lang === 'mm' && <Check color="#514BC3" size={24} />}
      </TouchableOpacity>
      <Text style={{color: 'blue', alignSelf: 'center'}}>{t('settings')}</Text>
    </View>
  );
};

export default LanguageChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    height: hp('6%'),
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    marginHorizontal: wp('5%'),
    marginVertical: hp(2),
    borderRadius: 15,
  },
});
