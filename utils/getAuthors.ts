import axios from "axios";

const getAuthors = async (inputValue: string): Promise<{ value: string; label: string }[]> => {
  const result = await axios.get(
    `https://kpi-affin-2021.herokuapp.com/authors/?term=${encodeURIComponent(inputValue || "")}`,
  );

  const authors: string[] = result?.data?.authors || [];

  return authors.map((author) => ({ value: author, label: author }));
};

export default getAuthors;
