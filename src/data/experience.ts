export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "research" | "work" | "teaching";
  logo?: string;
}

import zpfLogo from "@/assets/icons/zpf.jpeg";
import brownLogo from "@/assets/icons/brown.png";
import dapustorLogo from "@/assets/icons/dapustor.jpeg";

export const experiences: Experience[] = [
  {
    title: "Research Intern",
    organization: "AI² Robotics (Zhipingfang)",
    location: "Shenzhen, China",
    period: "December 2025 – Present",
    description: [],
    type: "research",
    logo: zpfLogo,
  },
  {
    title: "Machine Learning Researcher",
    organization: "Brown University",
    location: "Providence, RI",
    period: "June 2025 – Present",
    description: [],
    type: "research",
    logo: brownLogo,
  },
  {
    title: "Software Engineer in Test Intern",
    organization: "DapuStor",
    location: "Shenzhen, China",
    period: "June 2024 – Aug. 2024",
    description: [],
    type: "work",
    logo: dapustorLogo,
  },
];
