import type { Publication } from "@/data/publications";

interface PublicationItemProps {
  publication: Publication;
}

function getStatusBadge(status: Publication["status"]) {
  switch (status) {
    case "published":
      return <span className="badge badge-published">Published</span>;
    case "preprint":
      return <span className="badge badge-preprint">Preprint</span>;
    case "under-review":
      return <span className="badge badge-review">Under Review</span>;
  }
}

export default function PublicationItem({ publication }: PublicationItemProps) {
  const authorList = publication.authors.map((author, index) => {
    const isMe = author.toLowerCase().includes("kevin yang");
    return (
      <span key={index}>
        {index > 0 && ", "}
        {isMe ? <strong>{author}</strong> : author}
      </span>
    );
  });

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-text">
            {publication.links?.paper ? (
              <a href={publication.links.paper} className="link" target="_blank" rel="noopener noreferrer">
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h3>
          <p className="text-sm text-text-light mt-1">{authorList}</p>
          {publication.venue && (
            <p className="text-sm text-text-muted mt-1">
              {publication.venue}, {publication.year}
            </p>
          )}
          {publication.links && (
            <div className="flex gap-3 mt-2 text-sm">
              {publication.links.code && (
                <a href={publication.links.code} className="link" target="_blank" rel="noopener noreferrer">
                  [Code]
                </a>
              )}
              {publication.links.project && (
                <a href={publication.links.project} className="link" target="_blank" rel="noopener noreferrer">
                  [Project]
                </a>
              )}
            </div>
          )}
        </div>
        <div className="shrink-0">{getStatusBadge(publication.status)}</div>
      </div>
    </div>
  );
}
