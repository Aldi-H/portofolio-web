import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
/* import "./App.css"; */

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
