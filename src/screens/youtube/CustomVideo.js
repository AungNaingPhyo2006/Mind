import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {WebView} from 'react-native-webview';
const CustomVideo = () => {
  const videoUrl = 'https://www.youtube.com/embed/7uxotUcTBWg';
  return (
    <View style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri: videoUrl}}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

export default CustomVideo;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
