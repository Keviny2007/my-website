export interface NewsItem {
  date: string;
  content: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "2025-06",
    content: "The start of my journey in research...",
  },
  {
    date: "2024-09",
    content: "Began studying at Brown!",
  },
  {
    date: "2022-06",
    content: "Obtained the title of the 6th Professional Go Player in North America",
  },
];
