import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import News from "./components/sections/News";
import Experience from "./components/sections/Experience";
import Publications from "./components/sections/Publications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-8">
        <Header />
        <News />
        <Experience />
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
