import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Technology />
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;
