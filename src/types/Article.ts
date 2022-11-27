import { Multimedia } from "./Multimedia";

export type Article = {
  abstract: string;
  byline: string;
  created_date: string;
  published_date: string;
  multimedia: Multimedia[];
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}

export type ArticleListResponse = {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: Article[];
  section: string;
  status: string;
}