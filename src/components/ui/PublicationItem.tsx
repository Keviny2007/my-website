import type { Publication } from "@/data/publications";

interface PublicationItemProps {
  publication: Publication;
}

export default function PublicationItem({ publication }: PublicationItemProps) {
  const authorList = publication.authors.map((author, index) => {
    const isMe = author.toLowerCase().includes("kevin yang");
    return (
      <span key={index}>
        {index > 0 && ", "}
        {isMe ? <span style={{ textDecoration: "underline" }}>{author}</span> : author}
      </span>
    );
  });

  const content = (
    <div style={{ flex: 1 }}>
      <div className="pub-links" style={{ marginBottom: "0.3em" }}>
        {publication.links?.paper && (
          <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">[paper]</a>
        )}
        {publication.links?.code && (
          <a href={publication.links.code} target="_blank" rel="noopener noreferrer">[code]</a>
        )}
        {publication.links?.project && (
          <a href={publication.links.project} target="_blank" rel="noopener noreferrer">[project]</a>
        )}
      </div>
      <p className="pub-title">{publication.title}</p>
      <p className="pub-authors">{authorList}</p>
      <div className="pub-meta">
        {publication.venue && (
          <strong>{publication.venue} {publication.year}</strong>
        )}
      </div>
    </div>
  );

  return (
    <div className="pub-item">
      {publication.thumbnail && (
        <div className="pub-thumbnail">
          <img
            src={publication.thumbnail}
            alt={`${publication.title} thumbnail`}
            className="pub-thumbnail-img"
          />
        </div>
      )}
      {content}
    </div>
  );
}
