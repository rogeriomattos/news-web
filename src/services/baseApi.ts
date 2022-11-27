import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key':process.env.API_KEY
  }
});


