import React, { useEffect } from "react";
import '../App.css';
import HeaderName from "../components/HeaderName";
import Footer from "../components/Footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Portfolio of Rey Isaac Jr.";
  }, []);

  return (
    <div className="app">
      {/* Header Name Component */}
      <HeaderName />

      <header className="container">
        <h2>
          I'm an AI and software developer passionate about building intelligent, user-centered applications.
        </h2>

        
      </header>

      <section className="container">
        <p className="about-description">
          With a focus on <strong>machine learning</strong> and <strong>computer vision</strong>, my work turns complex data into practical, meaningful tools. Projects often sit at the intersection of technology, design, and social relevance—where systems aren't just functional, but also intuitive and impactful.
        </p>

        <p className="about-description">
          Blending creativity with logic, I enjoy crafting clean interfaces just as much as building what runs underneath. There's a natural pull toward frontend and UX work, but tackling backend and fullstack challenges has been just as rewarding—especially when solutions are rooted in thoughtful design.
        </p>

        <p className="about-description">
          Currently open to full-time opportunities in AI and software engineering, with a strong desire to contribute to meaningful work, collaborate across disciplines, and stay in constant pursuit of growth.
        </p>
      </section>

      <div className="profile-image-wrapper">
        <img src="./profile.jpg" alt="Reynaldo Isaac Jr." className="profile-image" />
      </div>

      <section className="container">
        <p className="section-title">My Story</p>

        <h3>I didn't start off acing AI.</h3>
        <p className="about-description">
          In fact, I failed it the first time I took CMSC 170 (Introduction to Artificial Intelligence) at ICS, UPLB. But failing wasn't the end—it became the spark that lit everything else. That experience humbled me. It taught me resilience, growth through failure, and the importance of learning with heart. The second time around, I didn't just pass—I fell in love with the craft.
        </p>

        <h3>Software became more than just code—it became communication.</h3>
        <p className="about-description">
          As the Marketing and Creatives Head of UPLB's Data Science Guild, I explored storytelling through Data Digest. I led frontend development in class projects where I focused not just on functionality, but clarity—asking “why” before jumping into the “how.” That design philosophy taught me that good systems aren't the ones filled with the most logic, the're the ones that make sense to the people who use them.
        </p>

        <h3>It hasn’t always been easy.</h3>
        <p className="about-description">
          Like many, I wrestled with imposter syndrome and the pressure to prove myself. I've had to unlearn people-pleasing, trust my own pace, and remind myself: “Everything can be learned.”
        </p>

        <h3>Now, I build because I care.</h3>
        <p className="about-description">
          Not just about clean code or clever architecture, but about solving real problems. Whether it's through AI tools or intuitive design, I aim to create things that help people make better decisions, simplify their work, or see the world a bit more clearly.
        </p>

        <h3>The journey hasn't been linear—but it's mine.</h3>
        <p className="about-description">
          I believe in staying curious, building with empathy, and always moving forward. And if my story resonates with yours, let's build something meaningful together.
        </p>
      </section>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}
