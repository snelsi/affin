import axios from "axios";

const getTopics = async (inputValue: string): Promise<{ value: string; label: string }[]> => {
  //   const result = await axios.get(
  //     `https://kpi-affin-2021.herokuapp.com/topics/?term=${encodeURIComponent(inputValue || "")}`,
  //   );

  //   const topics: string[] = result?.data?.topics || [];

  //   return topics.map((author) => ({ value: author, label: author }));

  return [];
};

export default getTopics;
