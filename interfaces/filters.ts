export interface Filters {
  authors: string[] | null;
  publishers: string | null;
  topics: string[] | null;
  publishedAfter: number | null;
  publishedBefore: number | null;
}

export interface SearchFilters extends Filters {
  search: string | null;
}
