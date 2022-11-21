export type Response<T> = {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: T[]
  section: string;
  status: string;
}