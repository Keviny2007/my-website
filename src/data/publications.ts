export type PublicationStatus = "published" | "preprint" | "under-review";

export interface Publication {
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  status: PublicationStatus;
  thumbnail?: string;
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
  abstract?: string;
}

import traThumbnail from "@/assets/icons/portfolio_tra.png";
import tssThumbnail from "@/assets/icons/tss.png";
import taeThumbnail from "@/assets/icons/portfolio_tae.png"

export const publications: Publication[] = [
  {
    title: "Less is More: On Data Redundancy in VLA Training",
    authors: ["Kevin Yang*", "Tony Yang*"],
    venue: "DATA-FM @ ICLR",
    year: 2026,
    status: "published",
    thumbnail: tssThumbnail,
    links: { paper: "https://openreview.net/pdf?id=bG8gPlSYvg" },
  },
  {
    title: "Temporal Reversal Asymmetry: A Physics-Inspired Metric For Evaluation World Models",
    authors: ["Kanpat Vesessook*", "Kevin Yang*"],
    venue: "ICLR Workshop World Models",
    year: 2026,
    status: "published",
    thumbnail: traThumbnail,
    links: { paper: "https://openreview.net/attachment?id=WVaRlnc23g&name=pdf" },
  },
  {
    title: "Towards Learning Representations of Policies in Games",
    authors: ["Kevin Yang*", "Kevin Wang*", "Arjun Prakash*"],
    venue: "Submitting to ICML",
    year: 2026,
    status: "preprint",
    thumbnail: taeThumbnail
  },
  {
    title: "Multi-Sensor Actigraphy: Improving Sleep-Wake Detection with a Multi-Limb Approach",
    authors: ["Dylan Green", "Myan Nguyen", "Kevin Yang", "Marissa Gray", "Andrea Webb", "Jeff Huang"],
    venue: "TBD",
    year: 2026,
    status: "preprint",
  },
];
