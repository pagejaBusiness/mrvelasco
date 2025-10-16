import "./App.css";
import Herosection from "./components/Herosection.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Topbutton from "./components/Topbutton.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Topbutton />
      </section>
      <section id="home">
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
