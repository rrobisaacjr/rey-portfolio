import React, { useEffect } from "react";
import './App.css';
import HeaderName from "./components/HeaderName";

export default function HomePage() {
  useEffect(() => {
    document.title = "Portfolio of Rey Isaac Jr.";
  }, []);
  
  return (
    <div className="app">
      {/* Header Name Component*/}
      <HeaderName></HeaderName>

      {/* Landing Opener Component*/}
      <header className="container">
        <h1 class="heading">
          Building the Future, Intelligently.
        </h1>
        <p class="description">
          As an AI/ML Developer and Software Engineer, I transform complex ideas into high-impact, scalable, and intelligent solutions using expertise in computer vision, deep learning, and full-stack development.
        </p>
        <div className="button-group">
          <button className="btn-primary bold-white">Let's Work Together →</button>
          <button className="btn-outline bold">Copy Email</button>
        </div>
      </header>

      

      {/* Floating Bottom Menu */}
      <nav className="floating-nav">
        <div className="profile">
          <img
            src="/loq2.png"
            alt="Profile"
            className="avatar"
          />
          <span>Rey Isaac Jr.</span>
        </div>
        <span class="material-symbols-rounded">home</span>
        <span class="material-symbols-rounded">account_circle</span>
        <span class="material-symbols-rounded">folder</span>
        <span class="material-symbols-rounded">mail</span>
      </nav>
    </div>
  );
}