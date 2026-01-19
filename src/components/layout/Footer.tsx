export default function Footer() {
  return (
    <footer className="py-8 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Kevin Yang. Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}
