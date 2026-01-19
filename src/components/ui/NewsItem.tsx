import type { NewsItem as NewsItemType } from "@/data/news";

interface NewsItemProps {
  item: NewsItemType;
}

export default function NewsItem({ item }: NewsItemProps) {
  return (
    <div className="flex gap-4 py-2">
      <span className="text-text-muted text-sm shrink-0 w-20">{item.date}</span>
      <p className="text-text-light">
        {item.link ? (
          <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">
            {item.content}
          </a>
        ) : (
          item.content
        )}
      </p>
    </div>
  );
}
