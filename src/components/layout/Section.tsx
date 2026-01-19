import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  card?: boolean;
}

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

export default function Section({ id, title, children, className = "", card = true }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section-container ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
    >
      {card ? (
        <div className="card-padded">
          {title && <h2 className="section-title">{title}</h2>}
          {children}
        </div>
      ) : (
        <>
          {title && <h2 className="section-title">{title}</h2>}
          {children}
        </>
      )}
    </motion.section>
  );
}
