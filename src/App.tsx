import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { MainLayout } from "./layouts/MainLayout"
import { MyRecipes } from "./pages/MyRecipes"
import { CreateRecipe } from "./pages/CreateRecipe"
import { Recipe } from "./pages/Recipe"
import { Grocery } from "./pages/Grocery"
import { Login } from "./pages/Login"
import { NoPage } from "./pages/NoPage"


function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='myRecipes' element={<MyRecipes />} />
            <Route path='createRecipe' element={<CreateRecipe />} />
            <Route path='grocery' element={<Grocery />} />
            <Route path='recipe' element={<Recipe />} />
            <Route path='login' element={<Login />} />
            <Route path={'/*'} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>

  )
}

export default App
