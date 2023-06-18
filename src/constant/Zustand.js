import {create} from 'zustand';
import NetInfo from '@react-native-community/netinfo';

const useAppState = create(set => ({
  lang: 'en',
  isLoading: true,
  isOnline: false,
  modalVisible: false, // Add modalVisible state

  data: null, // Add data state
  setLang: lang => set({lang}),
  setIsLoading: loading => set({isLoading: loading}),
  setIsOnline: online => set({isOnline: online}),

  setModalVisible: visible => set({modalVisible: visible}), // Add setModalVisible action
  setData: newData => set({data: newData}), // Add setData action
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
