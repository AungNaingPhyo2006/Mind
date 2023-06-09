import {create} from 'zustand';
import NetInfo from '@react-native-community/netinfo';

const useAppState = create(set => ({
  lang: 'en',
  isLoading: true,
  isOnline: false,
  setLang: lang => set({lang}),
  setIsLoading: loading => set({isLoading: loading}),
  setIsOnline: online => set({isOnline: online}),
  checkInternetConnection: async () => {
    const netInfoState = await NetInfo.fetch();
    set({isOnline: netInfoState.isConnected, isLoading: false});
  },
  handleRefresh: () => {
    set({isLoading: true});
    set(state => state.checkInternetConnection());
  },
}));

export default useAppState;
