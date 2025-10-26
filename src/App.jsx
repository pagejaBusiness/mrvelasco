import "./App.css";
import Herosection from "./components/Herosection.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Curses from "./components/Curses.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="courses">
        <Curses />
      </section>
    </div>
  );
}

export default App;
