import axios from "axios";
import { useQuery } from "react-query";
import useSearchParams from "utils/useSearchParams";
import IArticle from "interfaces/IArticle";
import { Filters, SearchFilters } from "interfaces/filters";

const queryToKey = (query: SearchFilters) => {
  return query;
};

export const getArticles = async ({ search, filters }: { search: string; filters: Filters }) =>
  axios.post("https://kpi-affin-2021.herokuapp.com/core/", {
    searchQuery: search,
    offset: 1,
    limit: 20,
    filter: {
      years:
        [
          filters.publishedAfter ? `>=${filters.publishedAfter}` : "",
          filters.publishedBefore ? `<=${filters.publishedBefore}` : "",
        ]
          .filter(Boolean)
          .join("&") || null,
    },
  });

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

const useArticles = () => {
  const { search, filters } = useSearchParams();

  const { data, error, ...props } = useQuery(["articles", queryToKey({ search, ...filters })], () =>
    getArticles({ search, filters }),
  );

  const articles = getUniqueArticles(data?.data?.data);
  const total: number = data?.data?.total || 0;

  const typedError = error as {
    response: {
      status: string;
      statusText: string;
    };
  };

  return { articles, total, error: typedError, ...props };
};

export default useArticles;
