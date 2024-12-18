import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/Navbar";
import { Header } from "../components/Header/Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen-footer-nav md:min-h-screen-nav">
        <Outlet />
      </main>
      <Navbar />
    </>
  );
}
