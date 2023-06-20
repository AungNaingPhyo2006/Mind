import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import AssetResource from './AssetResource';

// export async function addTracks(tracks) {
//   // if (!tracks) {
//   //   console.warn('Tracks are not defined.');
//   //   return;
//   // }

//   await TrackPlayer.add(myTracks);
//   // await TrackPlayer.add(tracks.filter(track => !track.url));

//   await TrackPlayer.setRepeatMode(RepeatMode.Queue);

//   TrackPlayer.addEventListener('playback-track-changed', async event => {
//     const duration = await TrackPlayer.getDuration();
//     const position = await TrackPlayer.getPosition();
//     console.log(`Current duration: ${duration}, Current position: ${position}`);
//   });
// }

export const patthana = {
  url: require('../assets/mpThree/pathana.mp3'), // Load media from the app bundle
  title: 'ပဌာန်း ဒေသနာတော်',
  artist: 'မဟာ ကန်ပတ်လည် ဆရာတော်',
  album: 'Patthana',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetResource.dhamma_10, // Load artwork from the network
  duration: 1365.028,
};
export const test2 = {
  url: require('../assets/mpThree/test2.m4a'), // Load media from the app bundle
  title: 'ပရိတ်ကြီး (၁၁) သုတ် ',
  artist: 'မင်းကွန်း ဆရာတော်ကြီး',
  album: 'ပရိတ်ကြီး',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetResource.dhamma_11, // Load artwork from the network
  duration: 65.28,
};
export const test3 = {
  url: require('../assets/mpThree/test3.m4a'), // Load media from the app bundle
  title: 'ပရိတ်ကြီး (၁၁) သုတ် ',
  artist: 'ဖားအောက် တောရ ဆရာတော်',
  album: 'ပရိတ်ကြီး',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetResource.dhamma_1, // Load artwork from the network
  duration: 65.28,
};
export const test = {
  url: require('../assets/mpThree/test.m4a'), // Load media from the app bundle
  title: 'ပရိတ်ကြီး (၁၁) သုတ် ',
  artist: 'အရှင်ဥတ္တရ (မဟာစည်နယ်လှည့် ဓမ္မကထိက)',
  album: 'ပရိတ်ကြီး',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetResource.dhamma_wheel, // Load artwork from the network
  duration: 65.28,
};
export const test1 = {
  url: require('../assets/mpThree/test1.m4a'), // Load media from the app bundle
  title: 'နမက္ကာရ ဘုရားရှိခိုး',
  artist: 'ဖားအောက် တောရ ဆရာတော်',
  album: 'နမက္ကာရ',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetResource.dhamma_1, // Load artwork from the network
  duration: 65.28,
};
