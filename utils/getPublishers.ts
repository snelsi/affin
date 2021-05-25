import axios from "axios";

const getPublishers = async (inputValue: string): Promise<{ value: string; label: string }[]> => {
  //   const result = await axios.get(
  //     `https://kpi-affin-2021.herokuapp.com/publishers/?term=${encodeURIComponent(inputValue || "")}`,
  //   );

  //   const publishers: string[] = result?.data?.publishers || [];

  //   return publishers.map((author) => ({ value: author, label: author }));

  return [];
};

export default getPublishers;
