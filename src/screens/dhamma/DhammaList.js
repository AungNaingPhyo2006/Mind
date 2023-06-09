import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import useAppState from '../../constant/Zustand';
import VideoScreen from '../youtube/VideoScreen';
import RefreshIcon from '../../components/RefreshIcon';
import {ArrowLeftCircle} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const DhammaList = ({videoIds}) => {
  const navigation = useNavigation();
  const {isLoading, isOnline, checkInternetConnection, handleRefresh} =
    useAppState();

  useEffect(() => {
    checkInternetConnection();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {isOnline ? (
        <VideoScreen videoIds={videoIds} />
      ) : (
        <RefreshIcon handleRefresh={handleRefresh} />
      )}
    </View>
  );
};

export default DhammaList;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
