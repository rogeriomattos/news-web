import { baseApi } from './baseApi';
import { MovieReviewListResponse } from '@types/MovieReview';

export const moviesServices = ({
  getLastReviews: async () => (await baseApi.get<MovieReviewListResponse>('/movies/v2/reviews/all.json?order=by-publication-date')).data
})

