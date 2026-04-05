export interface NewsItem {
  date: string;
  content: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-03",
    content: "2 papers accepted at DATA-FM @ ICLR 2026 and ICLR Workshop World Models 2026",
  },
  {
    date: "2026-02",
    content: "Selected as a reviewer for ICLR Workshop World Models 2026",
  },
  {
    date: "2025-12",
    content: "I join AI² Robotics as a research intern",
  },
  {
    date: "2025-06",
    content: "I start machine learning research at Brown University",
  },
  {
    date: "2024-09",
    content: "I start my B.S. in Applied Math and Computer Science at Brown University",
  },
  {
    date: "2022-06",
    content: "Obtained the title of the 6th Professional Go Player in North America",
  },
];
