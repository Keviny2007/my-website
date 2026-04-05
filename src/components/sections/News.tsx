import Section from "@/components/layout/Section";
import { news } from "@/data/news";

export default function News() {
  if (news.length === 0) return null;

  return (
    <Section id="news" title="News">
      <div className="news-scroll">
        <table className="news-table">
          <tbody>
            {news.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.content}</a>
                  ) : (
                    item.content
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
