import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/Navbar";
import { Header } from "../components/Header/Header";
import { CardApiPlaceholder } from "../components/CardApiPlaceholder/CardApiPlaceholder";
import UploadRecipe from "../components/CardApiPlaceholder/UploadRecipe/UploadRecipe";


export function MainLayout() {
  return (
    <>
    <Header/>
    <CardApiPlaceholder/>
    <UploadRecipe/>
    <main>
        <Outlet/>
    </main>
    <Navbar/>
    </>
  )
}
