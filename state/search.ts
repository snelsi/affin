import { atom } from "recoil";
import { Filters } from "interfaces/filters";

export const searchSearchState = atom<string | null>({
  key: "searchSearchState",
  default: "",
});

export const searchFiltersState = atom<Filters>({
  key: "searchFiltersState",
  default: {
    authors: null,
    publishers: null,
    publishedAfter: null,
    publishedBefore: null,
  },
});

export const searchFiltersOpenState = atom<boolean>({
  key: "searchFiltersOpenState",
  default: false,
});
