// src/Layout.jsx
import { Outlet } from "react-router-dom";
import FloatingNav from "./components/FloatingNav";

export default function Layout() {
  return (
    <>
      <Outlet /> {/* This renders the page (e.g., HomePage, AboutPage, etc.) */}
      <FloatingNav /> {/* Always visible */}
    </>
  );
}
