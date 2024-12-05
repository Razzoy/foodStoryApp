import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { MyRecipes } from "./pages/MyRecipes";
import { CreateRecipe } from "./pages/CreateRecipe";
import { Recipe } from "./pages/Recipe";
import { Grocery } from "./pages/Grocery";
import { Login } from "./pages/Login";
import { NoPage } from "./pages/NoPage";
import { LogInLayout } from "./layouts/LogInLayout";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="myRecipes" element={<MyRecipes />} />
            <Route path="createRecipe" element={<CreateRecipe />} />
            <Route path="grocery" element={<Grocery />} />
            <Route path="recipe/:id" element={<Recipe />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
          <Route path={"/login"} element={<LogInLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
