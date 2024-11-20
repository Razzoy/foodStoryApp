import { NavLink } from "react-router-dom";
import { NavBarIcon } from "./NavBarIcon/NavBarIcon";

export function Navbar() {
  return (
    <div className="flex justify-between w-full p-3 px-6 fixed bottom-0">
      <NavLink className={'flex group items-center'} to="/">
        <NavBarIcon name="Home"/>
      </NavLink>
      <NavLink className={'flex group items-center'} to="/myRecipes">
        <NavBarIcon name="Search"/>
      </NavLink>
      <NavLink className={'flex group items-center'} to="/createRecipe">
      <NavBarIcon name="Add" />
      </NavLink>
      <NavLink className={'flex group items-center'} to="/grocery">
      <NavBarIcon name="List" />
      </NavLink>
    </div>
  )
}
