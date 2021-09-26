import axios from 'axios'

const http = axios.create({
  baseURL: 'https://openedu-api.61qt.cn',
});

export default http;
