import Section from "@/components/layout/Section";
import PublicationItem from "@/components/ui/PublicationItem";
import { publications } from "@/data/publications";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <Section id="publications" title="Publications">
      {publications.map((pub, index) => (
        <PublicationItem key={index} publication={pub} />
      ))}
    </Section>
  );
}
