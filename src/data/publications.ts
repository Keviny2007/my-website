export type PublicationStatus = "published" | "preprint" | "under-review";

export interface Publication {
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  status: PublicationStatus;
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
  abstract?: string;
}

export const publications: Publication[] = [
  {
    title: "Less is More: On Data Redundancy in VLA Training for LIBERO",
    authors: ["Kevin Yang*", "Tony Yang*"],
    venue: "DATA-FM @ ICLR 2026",
    year: 2026,
    status: "under-review",
  },
  {
    title: "Towards Learning Representations of Policies in Games",
    authors: ["Kevin Yang*", "Kevin Wang*", "Arjun Prakash*"],
    venue: "TBD",
    year: 2026,
    status: "preprint",
  },
  {
    title: "Multi-Sensor Actigraphy: Improving Sleep-Wake Detection with a Multi-Limb Approach",
    authors: ["Dylan Green", "Myan Nguyen", "Kevin Yang", "Marissa Gray", "Andrea Webb", "Jeff Huang"],
    venue: "TBD",
    year: 2026,
    status: "preprint",
  },
];
