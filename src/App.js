import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About
        image={aboutimage}
        title="Comes With All You Need"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Download And Get The App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
