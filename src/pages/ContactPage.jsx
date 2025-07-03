import React, { useEffect } from "react";
import '../App.css';
import HeaderName from "../components/HeaderName";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Portfolio of Rey Isaac Jr.";
  }, []);

  return (
     <div className="app">
        {/* Header Name Component */}
        <HeaderName />
  
        <header className="container">
          <h2>
            Contact
          </h2>
  
          
        </header>
      </div>
  );
}