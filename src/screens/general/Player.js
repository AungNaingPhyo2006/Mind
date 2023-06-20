import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {setupPlayer, playbackService} from '../../../Service';
import {
  FileHeart,
  PauseCircle,
  Play,
  PlayCircle,
  ShieldClose,
} from 'lucide-react-native';

const Player = ({myTracks, setPlistModal}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  // console.log(trackDuration);
  const playTrack = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.reset();
      await TrackPlayer.add(myTracks);
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setupPlayer();
    playbackService();

    const getTrackDuration = async () => {
      const duration = await TrackPlayer.getDuration();
      setTrackDuration(duration);
    };

    const getPosition = async () => {
      const position = await TrackPlayer.getPosition();
      setCurrentPosition(position);
    };

    // Update the current position every second
    const interval = setInterval(getPosition, 1000);

    getTrackDuration();

    return () => {
      clearInterval(interval);
    };
  }, [currentPosition]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainderSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const onSliderValueChange = async value => {
    await TrackPlayer.seekTo(value);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 32,
        }}>
        <Image
          source={myTracks.artwork}
          resizeMode="cover"
          style={{width: 200, height: 200, borderRadius: 20}}
        />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={trackDuration}
        value={currentPosition}
        onValueChange={onSliderValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="yellow"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.duration}>{formatTime(currentPosition)}</Text>
        <View style={{width: '50%'}}></View>
        <Text style={styles.duration}>{formatTime(trackDuration)}</Text>
      </View>
      {/* <===================> */}
      <View
        style={{
          // backgroundColor: 'green',
          padding: 5,
          marginVertical: 12,
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{myTracks.title}</Text>
        <Text style={styles.artist}>{myTracks.artist}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => {
            setPlistModal(false);
          }}
          style={{justifyContent: 'center'}}>
          <ShieldClose size={30} color="white" />
        </TouchableOpacity>
        {/* <===============> */}
        <TouchableOpacity onPress={playTrack}>
          {isPlaying ? (
            <PauseCircle size={48} color="white" />
          ) : (
            <PlayCircle size={48} color="white" />
          )}
        </TouchableOpacity>
        {/* <==================> */}
        <TouchableOpacity
          onPress={() => {
            Alert.alert('', 'Need to apply lyric text!');
          }}
          style={{justifyContent: 'center'}}>
          <FileHeart size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'yellow',
  },
  artist: {
    fontSize: 16,
    marginBottom: 16,
    color: 'pink',
  },
  controls: {
    width: '50%',
    // backgroundColor: 'pink',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: '85%',
    height: 10,
    // marginBottom: 16,

    paddingVertical: 15,
  },
  duration: {
    fontSize: 16,
    color: 'white',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    // Add more custom styles for the thumb here
  },
});
