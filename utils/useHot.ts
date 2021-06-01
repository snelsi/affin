import { useInfiniteQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useTranslation } from "next-i18next";
import IArticle from "interfaces/IArticle";
import { getArticles, getUniqueArticles, APIResponse } from "./useArticles";

const useHot = () => {
  const { t } = useTranslation("common");

  const searchText = t("hydroacoustics");

  const { data, error, ...props } = useInfiniteQuery<AxiosResponse<APIResponse>>(
    ["hot articles", searchText],
    ({ pageParam = 0 }) => getArticles({ search: searchText, filters: null }, 5, pageParam),
    {
      getNextPageParam: (_lastPage, pages) => pages.length,
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

  return { articles, total, error: typedError, ...props };
};

export default useHot;
