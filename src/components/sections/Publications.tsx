import Section from "@/components/layout/Section";
import PublicationItem from "@/components/ui/PublicationItem";
import { publications } from "@/data/publications";

export default function Publications() {
  if (publications.length === 0) {
    return (
      <Section id="publications" title="Publications">
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <p className="text-text-light">Publications coming soon.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <PublicationItem key={index} publication={pub} />
        ))}
      </div>
    </Section>
  );
}
