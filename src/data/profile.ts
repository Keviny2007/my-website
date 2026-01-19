export interface Profile {
  name: string;
  affiliation: string;
  department: string;
  bio: string;
  email: string;
  photo: string;
  links: {
    github?: string;
    linkedin?: string;
    googleScholar?: string;
    twitter?: string;
  };
}

export const profile: Profile = {
  name: "Kevin Yang",
  affiliation: "Brown University",
  department: "Applied Mathematics & Computer Science",
  bio: "Hi! I'm a 2nd year student at Brown University studying applied mathematics and computer science. My research interests include self-supervised learning, VLAs, and computer vision. There was a time I when I played Go professionally. In my free time, I enjoy playing basketball, working out, and being outdoors in general.",
  email: "kevin_c_yang@brown.edu",
  photo: "/src/assets/icons/pfp.jpg",
  links: {
    github: "https://github.com/Keviny2007",
    linkedin: "https://linkedin.com/in/kevin-yang-a06831320",
  },
};
