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

      <header className="container project-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 class="heading">
              From tinkering to tangible builds.
            </h1>
            <p className="about-description">Each project reflects how I turn ideas into functional solutions while growing as a developer.</p>
            <button className="btn-secondary">More on GitHub</button>
          </div>
        </section>
        
        {/* First Content Block */}
        <section className="content-block">
          <div className="text">
            <div className="project-header">
              <h2>GraffiTrace</h2>
              {/* <h5 className="project-date">Sep 2024 – Jun 2025</h5> */}
            </div>
            <p className="about-description">A CNN-based system that detects and maps graffiti hotspots from Google Street View images using Faster R-CNN. Achieved strong real-world performance and earned a Best Research Paper nomination at IURS 2025.</p>
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
            <div className="project-header reverse">
              <h2>PICSEL</h2>
              {/* <h5 className="project-date">Mar – Jun 2024</h5> */}
            </div>
            <p className="about-description">An online room reservation platform for ICS that streamlines bookings for classes, events, and meetings. As Frontend Team Lead, I designed the UI/UX, guided development sprints, and ensured smooth team collaboration.</p>
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
