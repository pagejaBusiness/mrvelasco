import "./App.css";
import Herosection from "./components/Herosection.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <section>
        <Herosection />
      </section>
    </div>
  );
}

export default App;
