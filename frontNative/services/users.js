import axios from 'axios';

const baseURL = 'http://192.168.1.100:3000';

const service = axios.create({withCredentials: true, baseURL});

import AsyncStorage from '@react-native-community/async-storage';

const USER_SERVICE = {
  users: async () => {
    const token = await AsyncStorage.getItem('token');
    return await service.post(`/getUsers`, {token: token});
  },
};

export default USER_SERVICE;
