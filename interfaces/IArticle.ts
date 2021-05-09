interface IArticle {
  id: string;
  title: string;
  authors: string[];
  year: number;
  publisher: string;
  description: string;
  topics: string[];
  downloadUrl: string;
}

export default IArticle;
