import React, { useEffect } from "react";
import '../App.css';
import HeaderName from "../components/HeaderName";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Portfolio of Rey Isaac Jr.";
  }, []);

  return (
    <div className="app">
      {/* Header Name Component */}
      <HeaderName />

      <header className="container">
        <h2>
          Projects
        </h2>

        
      </header>
    </div>
  );
}
