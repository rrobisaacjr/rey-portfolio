import React, { useEffect } from "react";
import '../App.css';
import HeaderName from "../components/HeaderName";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Portfolio of Rey Isaac Jr.";
  }, []);

  return (
    <div className="app">
      {/* Header Name Component */}
      <HeaderName />

      <header className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Projects</h1>
            <p className="about-description">Here's a collection of things I've built, tinkered with, and brought to life, projects that reflect my journey as a developer and the skills I've picked up along the way. </p>
            <button className="btn-secondary">Button</button>
          </div>
        </section>

        {/* First Content Block */}
        <section className="content-block">
          <div className="text">
            <h2>GraffiTrace</h2>
            <p className="about-description">A subheading for this section, as long or as short as you like</p>
            <div className="button-group center">
              <button className="btn-primary">View Details</button>
              <button className="btn-secondary">Source Code</button>
            </div>
          </div>
          <div className="placeholder-image"></div>
        </section>

        {/* Second Content Block */}
        <section className="content-block reverse">
          <div className="placeholder-image"></div>
          <div className="text">
            <h2>PICSEL</h2>
            <p className="about-description">A subheading for this section, as long or as short as you like</p>
            <div className="button-group center">
              <button className="btn-primary">View Details</button>
              <button className="btn-secondary">Source Code</button>
            </div>
          </div>
        </section>
      </header>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
