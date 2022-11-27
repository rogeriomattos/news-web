export type MovieReview = {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: {
      type: string;
      url: string;
      suggested_link_text: string;
  },
  multimedia: {
      type: string;
      src: string;
      height: number;
      width: number;
  }
};

export type MovieReviewListResponse = {
    status: string,
    copyright: string;
    has_more: boolean;
    num_results: number;
    results: MovieReview[];
};