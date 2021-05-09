import axios from "axios";
import { useQuery } from "react-query";
import useSearchParams from "utils/useSearchParams";
import { Filters, SearchFilters } from "interfaces/filters";

const queryToKey = (query: SearchFilters) => {
  return query;
};

const getArticles = async ({ search, filters }: { search: string; filters: Filters }) =>
  axios.post("https://kpi-affin-2021.herokuapp.com/core/", {
    searchQuery: search,
    offset: 1,
    limit: 100,
    filter: {
      languages: "English",
      years: `>=${filters.publishedAfter} AND <=${filters.publishedBefore}`,
    },
  });

const useArticles = () => {
  const { search, filters } = useSearchParams();

  const { data, ...props } = useQuery(["articles", queryToKey({ search, ...filters })], () =>
    getArticles({ search, filters }),
  );

  const articles = data?.data?.data;
  const total = data?.data?.total || 0;

  return { articles, total, ...props };
};

export default useArticles;
