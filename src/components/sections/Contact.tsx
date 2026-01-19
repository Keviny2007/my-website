import Section from "@/components/layout/Section";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-text-light">
            Interested in collaboration or have questions about my research? Feel free to reach out.
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white transition-colors font-medium shrink-0"
        >
          <Mail className="h-5 w-5" />
          {profile.email}
        </a>
      </div>
    </Section>
  );
}
