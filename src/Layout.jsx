import { Outlet } from "react-router-dom";
import FloatingNav from "./components/FloatingNav";

export default function Layout() {
  return (
    <>
      <main id="page-wrapper">
        <Outlet /> {/* Page content (this will transition) */}
      </main>
      <FloatingNav /> {/* Always visible, does not transition */}
    </>
  );
}
