import { baseApi } from './baseApi';
import { ArticleListResponse } from '@types/Article';

export const feedService = ({
  getHome: async () => (await baseApi.get<ArticleListResponse>('/topstories/v2/home.json')).data
})

