import { FileText, Mail, Building2, FlaskConical } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";

function EmailButton({ email }: { email: string }) {
  const [user, domain] = email.split("@");
  const [host, ...tldParts] = domain.split(".");
  const tld = tldParts.join(".");
  return (
    <a href={`mailto:${email}`} className="icon-btn">
      <Mail size={16} className="icon-btn-icon" />
      <span>
        <span className="icon-btn-main">{user}</span>
        {" "}<span className="icon-btn-muted">at</span>{" "}
        <span className="icon-btn-main">{host}</span>
        {" "}<span className="icon-btn-muted">dot</span>{" "}
        <span className="icon-btn-main">{tld}</span>
      </span>
    </a>
  );
}

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p>{profile.bio}</p>

        <div className="about-links">
          <a href="/Kevin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FileText size={16} className="icon-btn-icon" />
            <span className="icon-btn-main">CV</span>
          </a>
          <a href="https://scholar.google.com/citations?user=PNJSQjQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" className="icon-btn-icon" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
            </svg>
            <span className="icon-btn-main">Google Scholar</span>
          </a>
          <EmailButton email={profile.email} />
        </div>

        <h3 className="exp-inline-heading">Recent Experiences</h3>
        <ul className="exp-inline-list">
          {experiences.map((exp, index) => (
            <li key={index} className="exp-inline-item">
              {exp.type === "research" ? (
                <FlaskConical size={15} className="exp-inline-icon" />
              ) : (
                <Building2 size={15} className="exp-inline-icon" />
              )}
              <span>
                {exp.title}, <strong>{exp.organization}</strong>, {exp.period}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
