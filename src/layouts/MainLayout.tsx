import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/Navbar";
import { Header } from "../components/Header/Header";
import { CardApiPlaceholder } from "../components/CardApiPlaceholder/CardApiPlaceholder";


export function MainLayout() {
  return (
    <>
    <Header/>
    <CardApiPlaceholder/>
    <main>
        <Outlet/>
    </main>
    <Navbar/>
    </>
  )
}
