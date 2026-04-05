import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  containerClass?: string;
}

export default function Section({ id, title, children, containerClass = "" }: SectionProps) {
  return (
    <section id={id} className="content-section">
      <div className={`container ${containerClass}`}>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
