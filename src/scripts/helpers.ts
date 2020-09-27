import React from "react";
import { useLocation } from "react-router-dom";

export const urlParamsToObject = (url: string) =>
  Object.fromEntries(new URLSearchParams(url));

export const useSearchParams = () => {
  const [params, setParams] = React.useState<{
    [k: string]: string;
  }>({});
  const { search } = useLocation();

  React.useEffect(() => setParams(urlParamsToObject(search)), [search]);

  return params;
};
