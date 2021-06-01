import axios, { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";
import useSearchParams from "utils/useSearchParams";
import { Filters } from "interfaces/filters";
import IArticle from "interfaces/IArticle";

interface IFilters {
  topics?: string;
  authors?: string;
  publishers?: string;
  years?: string;
}

interface APIResponseOK {
  data: IArticle[];
  status: "OK";
  total: number;
}
interface APIResponseError {
  data: null;
  status: "ERROR";
  total: null;
}
export type APIResponse = APIResponseOK | APIResponseError;

const queryToKey = ({ search, filters }: { search: string; filters: Filters | null }) => {
  const topics = getUniqueTrimmed(filters?.topics) || null;
  const authors = getUniqueTrimmed(filters?.authors) || null;
  const publishers = filters?.publishers?.trim() || null;
  const years =
    [filters?.publishedAfter, filters?.publishedBefore].filter(Boolean).join("-") || null;

  const searchQuery = search || publishers || topics?.[0] || authors?.[0] || years;

  const topicsString = topics?.join("|");
  const authorsString = authors?.join("|");

  let filter: IFilters = {};
  if (topicsString) filter.topics = topicsString;
  if (authorsString) filter.authors = authorsString;
  if (publishers) filter.publishers = publishers;
  if (years) filter.years = years;

  return { search: searchQuery, filters: Object.keys(filter).length === 0 ? null : filter };
};

export const getArticles = async (
  query: { search: string; filters: Filters | null },
  limit = 20,
  offset = 1,
) => {
  const { search, filters } = queryToKey(query);

  return axios.post<APIResponse>("https://kpi-affin-2021.herokuapp.com/pullarticles/", {
    searchQuery: search,
    offset,
    limit,
    filter: filters,
  });
};

const getUniqueTrimmed = (values: string[] | null) =>
  values ? Array.from(new Set(values.map((v) => v?.trim()))) : values;

const getScore = (article: IArticle) => {
  let score = 0;
  if (article.description?.trim()) score += 2;
  if (article.topics?.length > 0) score += 1;
  return score;
};
const sortCards = (articles: IArticle[]) => articles?.sort((a, b) => getScore(b) - getScore(a));

export const getUniqueArticles = (articles: IArticle[]): IArticle[] => {
  if (!articles) return articles;

  const urls = [];
  const res = [];
  for (let article of articles) {
    if (article.downloadUrl && !urls[article.downloadUrl]) {
      res.push(article);
      urls[article.downloadUrl] = true;
    }
  }

  return sortCards(
    res.map((article) => ({
      ...article,
      authors: getUniqueTrimmed(article.authors),
      topics: getUniqueTrimmed(article.topics),
    })),
  );
};

const useArticles = () => {
  const { search, active, filters } = useSearchParams();

  const enabled = Boolean(search?.trim() || active);

  const { data, error, ...props } = useInfiniteQuery<AxiosResponse<APIResponse>>(
    ["articles", queryToKey({ search, filters })],
    ({ pageParam = 0 }) => getArticles({ search, filters }, 20, pageParam),
    {
      getNextPageParam: (_lastPage, pages) => pages.length,
      enabled,
    },
  );

  const articles: IArticle[] =
    data?.pages?.map((page) => getUniqueArticles(page?.data?.data)).flat() || null;
  const total: number = data?.pages?.[0]?.data?.total || 0;

  const typedError = error as {
    response: {
      status: string;
      statusText: string;
    };
  };

  return { articles, total, error: typedError, enabled, ...props };
};

export default useArticles;
