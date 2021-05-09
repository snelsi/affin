import { useRouter } from "next/router";
import { Filters, SearchFilters } from "interfaces/filters";

const checkArray = (value: string | string[]): string[] =>
  Array.isArray(value) ? value : value ? [value] : null;
const checkString = (value: string | string[]): string | null =>
  Array.isArray(value) ? value[0] : value || null;
const checkNumber = (value: string | string[]): number | null => {
  const n = Array.isArray(value) ? value[0] : value;
  const num = Number.parseInt(n, 10);
  return Number.isNaN(num) ? null : num;
};

export const parseQuery = (query: { [x: string]: string | string[] }): SearchFilters => {
  try {
    const search = checkString(query.q) || "";
    const authors = checkArray(query.authors);
    const publishers = checkString(query.publishers);
    const publishedAfter = checkNumber(query.publishedAfter) || null;
    const publishedBefore = checkNumber(query.publishedBefore) || null;

    return { search, authors, publishers, publishedAfter, publishedBefore };
  } catch (e) {
    console.clear();
    console.log("Failed to pare query");
    console.log(e);
    return {
      search: null,
      authors: null,
      publishers: null,
      publishedAfter: null,
      publishedBefore: null,
    };
  }
};

interface Params {
  search: string | null;
  filters: Filters;
  active: boolean;
}
const useSearchParams = (): Params => {
  const { query } = useRouter();
  const { search, ...filters } = parseQuery(query);
  const active = Object.values(filters).some((f) => (Array.isArray(f) ? f.length > 0 : Boolean(f)));

  return {
    search,
    filters,
    active,
  };
};

export default useSearchParams;
