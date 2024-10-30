import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QuantumBackground from "./components/QuantumBackground";
import LanguageSelector from "./components/LanguageSelector";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="App">
      <QuantumBackground />
      <LanguageSelector currentLanguage={language} setLanguage={setLanguage} />
      <Header language={language} />
      <main>
        <Home language={language} />
        <About language={language} />
        <Research language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
