import Section from "@/components/layout/Section";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experiences.map((exp, index) => (
        <div key={index} className="exp-item">
          {exp.logo && (
            <img src={exp.logo} alt={exp.organization} className="exp-logo" />
          )}
          <div className="exp-info">
            <p className="exp-title">{exp.title}</p>
            <p className="exp-org">
              {exp.organization}
              {exp.location && <span className="exp-period"> · {exp.location}</span>}
            </p>
            <p className="exp-period">{exp.period}</p>
            {exp.description.length > 0 && (
              <ul style={{ marginTop: "0.3em", paddingLeft: "1.2em", fontSize: "0.9em" }}>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
