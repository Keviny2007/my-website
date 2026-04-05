import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import profilePic from "@/assets/icons/pfp.jpg";

const navLinks = [
  { href: "#news", label: "News" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
];

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar-inner">
        <img src={profilePic} alt={profile.name} className="sidebar-avatar" />
        <div>
          <h1 className="sidebar-name">{profile.name}</h1>
          <p className="sidebar-dept">{profile.department}</p>
          <p className="sidebar-affil">{profile.affiliation}</p>
        </div>
      </div>

      <nav id="nav">
        <ul>
          <li><a href="#about">About</a></li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {profile.links.github && (
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="plain" aria-label="GitHub">
            <Github size={22} />
          </a>
        )}
        {profile.links.linkedin && (
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="plain" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
        )}
      </div>
    </div>
  );
}
