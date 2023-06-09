import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {RefreshCcw} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';

const RefreshIcon = ({handleRefresh}) => {
  const {t} = useTranslation();
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
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
      <TouchableOpacity onPress={handleRefresh} style={styles.iconStyle}>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <RefreshCcw size={24} color="blue" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default RefreshIcon;

const styles = StyleSheet.create({
  offlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  offlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    padding: 5,
    borderRadius: 50,
    elevation: 5,
  },
});
