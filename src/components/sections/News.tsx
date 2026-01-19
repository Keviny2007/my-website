import Section from "@/components/layout/Section";
import { news } from "@/data/news";

export default function News() {
  if (news.length === 0) {
    return null;
  }

  return (
    <Section id="news" title="What's Poppin?">
      <div className="space-y-3">
        {news.map((item, index) => (
          <div key={index} className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-primary font-medium text-sm shrink-0 w-20">{item.date}</span>
            <p className="text-text-light text-sm">
              {item.link ? (
                <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
