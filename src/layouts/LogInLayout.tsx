import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/Navbar";
import { Header } from "../components/Header/Header";


export function LogInLayout() {
  return (
    <>

    <main>
        <Outlet/>
    </main>

    </>
  )
}
