// src/components/FloatingNav.jsx
import { useLocation, Link } from "react-router-dom";

export default function FloatingNav() {
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

  return (
    <nav className="floating-nav">
      <div className="profile">
        <img src="/loq2.png" alt="Profile" className="avatar" />
        <span>Rey Isaac Jr.</span>
      </div>
      <div className="divider" aria-hidden="true"></div>
      <Link to="/" className="nav-item">
        <span className={`material-symbols-rounded ${isActive("/") ? "active" : ""}`}>
          home
        </span>
        {isActive("/") && <span className="nav-label">Home</span>}
      </Link>
      <Link to="/about" className="nav-item">
        <span className={`material-symbols-rounded ${isActive("/about") ? "active" : ""}`}>
          account_circle
        </span>
        {isActive("/about") && <span className="nav-label">About</span>}
      </Link>
      <Link to="/projects" className="nav-item">
        <span className={`material-symbols-rounded ${isActive("/projects") ? "active" : ""}`}>
          folder
        </span>
        {isActive("/projects") && <span className="nav-label">Projects</span>}
      </Link>
      <Link to="/contact" className="nav-item">
        <span className={`material-symbols-rounded ${isActive("/contact") ? "active" : ""}`}>
          mail
        </span>
        {isActive("/contact") && <span className="nav-label">Contact</span>}
      </Link>
    </nav>
  );
}
