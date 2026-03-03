export interface NewsItem {
  date: string;
  content: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-03",
    content: "My two papers Less is More: On Data Redundancy in VLA Training and Temporal Reversal Asymmetry: A Physics-Inspired Metric For Evaluation World Models are accepted at ICLR Workshop 2026!",
  },
  {
    date: "2025-06",
    content: "The start of my journey in research...",
  },
  {
    date: "2022-06",
    content: "Obtained the title of the 6th Professional Go Player in North America",
  },
];
