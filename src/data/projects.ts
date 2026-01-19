export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "go bots",
    description: "Developed multiple competitive Go bots using reinforcement learning and Monte Carlo Tree Search. Created a 5x5 bot that achieves 6-dan level play and 19x19 bots ranging from beginner to 2-dan (intermediate) level. Implemented using Python with custom neural network architectures for position evaluation.",
    link: "https://github.com/Keviny2007/GoBot",
    tags: ["Python", "MCTS", "CNNs"],
  },
  {
    title: "InCite",
    description: "A research assistant that searches academic papers across multiple sources (arXiv, Semantic Scholar, and Google Scholar) in parallel and generates comprehensive research summaries using AI.",
    link: "https://github.com/Keviny2007/research-agent",
    tags: ["Agentic AI", "Gemini SDK"],
  },
  {
    title: "Galaxy10-DECaLS: A MAE Study",
    description: "Ablation studies for Masked Autoencoder (MAE) pretraining on astronomical image classification.",
    link: "https://github.com/Keviny2007/galaxy10_decals-mae",
    tags: ["PyTorch", "ViTs", "MAE"],
  },
  {
    title: "competition stuff",
    description: "Repo where I dump my notebooks for various competitions, Kaggle, quant, etc.",
    link: "https://github.com/Keviny2007/kaggle",
    tags: ["Machine Learning", "Data Science", "Quantitative Finance"],
  },
];
