import axios from 'axios';

const api = axios.create({
  baseURL: 'http://test-chat.blubots.com/api/',
});

export default api;
