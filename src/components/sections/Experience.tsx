import Section from "@/components/layout/Section";
import { experiences } from "@/data/experience";
import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";

export default function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "research":
        return <FlaskConical className="h-5 w-5" />;
      case "teaching":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {exp.logo ? (
                <img 
                  src={exp.logo} 
                  alt={`${exp.organization} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <div className="mt-1 p-2 bg-primary/10 text-primary rounded-lg">
                  {getIcon(exp.type)}
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg text-text">{exp.title}</h3>
                    <p className="font-medium text-primary">{exp.organization}</p>
                    <p className="text-sm text-text-light">{exp.location}</p>
                  </div>
                  <span className="text-sm text-text-light font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-text-light">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
