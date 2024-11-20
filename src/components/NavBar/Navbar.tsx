import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex gap-1">
      <NavLink to="/">
        <img src="src/assets/icons/Home.svg" alt="" />
      </NavLink>
      <NavLink to="/myRecipes">
        <img src="src/assets/icons/Search.svg" alt=""/>
      </NavLink>
      <NavLink to="/createRecipe">
        <img src="src/assets/icons/add.svg" alt="" />
      </NavLink>
      <NavLink to="/grocery">
        <img src="src/assets/icons/list.svg" alt="" />
      </NavLink>
    </div>
  )
}
