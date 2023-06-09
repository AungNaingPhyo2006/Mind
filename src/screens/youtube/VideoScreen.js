import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
  Button,
  View,
  Alert,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getYoutubeMeta} from 'react-native-youtube-iframe';

const VideoScreen = ({videoIds}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [videoMeta, setVideoMeta] = useState([]);

  useEffect(() => {
    const fetchVideoMeta = async () => {
      const metaPromises = videoIds.map(videoId => getYoutubeMeta(videoId));
      const metaData = await Promise.all(metaPromises);
      setVideoMeta(metaData);
    };

    fetchVideoMeta();
  }, []);

  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        setPlaying(false);
        // Alert.alert('Video has finished playing!');
        // Play the next video if available
        if (currentVideoIndex < videoIds.length - 1) {
          setCurrentVideoIndex(currentVideoIndex + 1);
          setPlaying(true);
        }
      }
    },
    [currentVideoIndex, videoIds],
  );

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {videoMeta.map((meta, index) => (
        <View
          key={videoIds[index]}
          style={styles.videoContainer}
          // pointerEvents="none"
        >
          <YoutubePlayer height={200} videoId={videoIds[index]} play={false} />
          <TouchableOpacity
            // TouchableOpacity to "steal" taps
            // absolutely positioned to the top
            // height must be adjusted to
            // just cover the top 3 dots
            style={{
              top: 0,
              height: 50,
              width: '100%',
              position: 'absolute',
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{meta.title}</Text>
          </View>
        </View>
      ))}
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </ScrollView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 20,
    backgroundColor: 'fuchsia',
  },
  videoContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: '#5b28ae',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomEndRadius: 30,
    elevation: 6,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
  },
});
