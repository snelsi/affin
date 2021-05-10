import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { searchSearchState, searchFiltersOpenState, searchFiltersState } from "state/search";

const useSearch = () => {
  const router = useRouter();

  const [search, setSearch] = useRecoilState(searchSearchState);
  const [active, setActive] = useRecoilState(searchFiltersOpenState);
  const [filters, setFilters] = useRecoilState(searchFiltersState);

  const searchArticles = () => {
    const query = { q: search, ...(active ? filters : {}) };

    router.push({
      pathname: "/search",
      query,
    });
  };

  const resetFilters = () =>
    setFilters({
      authors: null,
      publishers: null,
      publishedAfter: new Date().getFullYear() - 40,
      publishedBefore: new Date().getFullYear(),
    });

  return {
    search,
    setSearch,
    active,
    setActive,
    filters,
    setFilters,
    searchArticles,
    resetFilters,
  };
};

useSearch.displayName = "useSearch";

export default useSearch;
