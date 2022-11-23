import { baseApi } from './baseApi';
import { Article } from '@types/Article';
import { Response } from '@types/Response';

export const feedService = ({
  getHome: async () => (await baseApi.get<Response<Article>>('/home.json')).data
})

