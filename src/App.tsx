import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='myRecipes' element={<MyRecipes />} />
            <Route path='createRecipe' element={<CreateRecipe />} />
            <Route path='groceryList' element={<GroceryList />} />
            <Route path='recipe' element={<Recipe />} />
            <Route path='login' element={<Login />} />
            <Route path={'/*'} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App
