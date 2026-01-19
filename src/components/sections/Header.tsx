import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import profilePic from "@/assets/icons/pfp.jpg";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Header() {
  return (
    <motion.header
      className="max-w-5xl mx-auto px-6 pt-24 pb-8"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="card-padded">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={profilePic}
            alt={profile.name}
            className="w-40 h-64 rounded-xl object-cover object-top shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-text">{profile.name}</h1>
            <p className="text-primary font-medium mt-1">{profile.department}</p>
            <p className="text-text-light">{profile.affiliation}</p>

            <p className="text-text-light mt-4 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-text-light hover:text-text transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-text-light hover:text-text transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
