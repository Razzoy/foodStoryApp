import { NavLink } from "react-router-dom";
import { NavBarIcon } from "./NavBarIcon/NavBarIcon";
import { useState } from "react";


export function Navbar() {
  const [activeIcon, setActiveIcon] = useState("Home");

  const toggleActive = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div className="flex justify-between w-full p-3 px-6 fixed bottom-0 bg-white md:hidden">
      <NavLink
        onClick={() => toggleActive("Home")}
        className={"flex group items-center"}
        to="/"
      >
        <NavBarIcon
          name="Home"
          fill=""
          stroke={activeIcon === "Home" ? "#ff7463" : "Black"}
        />
      </NavLink>
      <NavLink
        onClick={() => toggleActive("Search")}
        className={"flex group items-center"}
        to="/myRecipes"
      >
        <NavBarIcon
          name="Search"
          fill={activeIcon === "Search" ? "#ff7463" : "Black"}
          stroke=""
        />
      </NavLink>
      <NavLink
        onClick={() => toggleActive("Add")}
        className={"flex group items-center"}
        to="/createRecipe"
      >
        <NavBarIcon
          name="Add"
          fill=""
          stroke={activeIcon === "Add" ? "#ff7463" : "Black"}
        />
      </NavLink>
      <NavLink
        onClick={() => toggleActive("List")}
        className={"flex group items-center"}
        to="/grocery"
      >
        <NavBarIcon
          name="List"
          fill={activeIcon === "List" ? "#ff7463" : "Black"}
          stroke=""
        />
      </NavLink>
    </div>
  );
}
