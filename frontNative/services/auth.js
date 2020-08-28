import axios from 'axios';

const baseURL = 'http://192.168.1.100:3000';

const service = axios.create({withCredentials: true, baseURL});

const AUTH_SERVICE = {
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    return await service.get('/logout');
  },
};

export default AUTH_SERVICE;
