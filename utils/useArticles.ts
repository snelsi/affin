import axios from "axios";
import { useQuery } from "react-query";
import useSearchParams from "utils/useSearchParams";
import IArticle from "interfaces/IArticle";
import { Filters } from "interfaces/filters";

const queryToKey = ({ search, filters }: { search: string; filters: Filters | null }) => {
  const topics = getUniqueTrimmed(filters?.topics) || null;
  const authors = getUniqueTrimmed(filters?.authors) || null;
  const publishers = filters?.publishers?.trim() || null;
  const years =
    [
      filters?.publishedAfter ? `>=${filters.publishedAfter}` : "",
      filters?.publishedBefore ? `<=${filters.publishedBefore}` : "",
    ]
      .filter(Boolean)
      .join("&") || null;

  const searchQuery = search || publishers || topics?.[0] || authors?.[0] || years;

  const topicsString = topics?.join("|");
  const authorsString = authors?.join("|");

  let filter = {
    topics: topicsString,
    authors: authorsString,
    publishers,
    years,
  };
  if (!Object.values(filter).some(Boolean)) filter = undefined;

  return { search: searchQuery, filters: filter };
};

export const getArticles = async (
  query: { search: string; filters: Filters | null },
  limit = 20,
  offset = 1,
) => {
  const { search, filters } = queryToKey(query);

  return axios.post(
    "https://kka8kksmqf.execute-api.eu-central-1.amazonaws.com/Prod/Scopus/GetArticles/",
    {
      searchQuery: search,
      offset,
      limit,
      filter: filters,
    },
  );
};

const getUniqueTrimmed = (values: string[] | null) =>
  values ? Array.from(new Set(values.map((v) => v?.trim()))) : values;

const getUniqueArticles = (articles: IArticle[]): IArticle[] => {
  if (!articles) return articles;

  const urls = [];
  const res = [];
  for (let article of articles) {
    if (article.downloadUrl && !urls[article.downloadUrl]) {
      res.push(article);
      urls[article.downloadUrl] = true;
    }
  }

  return res.map((article) => ({
    ...article,
    authors: getUniqueTrimmed(article.authors),
    topics: getUniqueTrimmed(article.topics),
  }));
};

const getScore = (article: IArticle) => {
  let score = 0;
  if (article.description?.trim()) score += 2;
  if (article.topics?.length > 0) score += 1;
  return score;
};
const sortCards = (articles: IArticle[]) => articles?.sort((a, b) => getScore(b) - getScore(a));

export const useHot = () => {
  const { data, error, ...props } = useQuery(["hot articles"], () =>
    getArticles({ search: "hydroacoustics", filters: null }, 5),
  );

  const articles = sortCards(getUniqueArticles(data?.data?.data));
  const total: number = data?.data?.total || 0;

  const typedError = error as {
    response: {
      status: string;
      statusText: string;
    };
  };

  return { articles, total, error: typedError, ...props };
};

const useArticles = () => {
  const { search, active, filters } = useSearchParams();

  const enabled = Boolean(search?.trim() || active);

  const { data, error, ...props } = useQuery(
    ["articles", queryToKey({ search, filters })],
    () => getArticles({ search, filters }),
    { enabled },
  );

  const articles = getUniqueArticles(data?.data?.data);
  const total: number = data?.data?.total || 0;

  const typedError = error as {
    response: {
      status: string;
      statusText: string;
    };
  };

  return { articles, total, error: typedError, enabled, ...props };
};

export default useArticles;
