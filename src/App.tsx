import Sidebar from "./components/Sidebar";
import About from "./components/sections/Header";
import News from "./components/sections/News";
import Publications from "./components/sections/Publications";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <div id="main">
          <div id="banner" />
          <About />
          <News />
          <Publications />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}
