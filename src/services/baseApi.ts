import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2/',
  params: {
    'api-key':process.env.API_KEY
  }
});


