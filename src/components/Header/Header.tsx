import { BurgerModal } from "../BurgerModal/BurgerModal";
import { NavLink } from "react-router-dom";
import { NavBarIcon } from "../NavBar/NavBarIcon/NavBarIcon";
import { useState, useEffect } from "react";

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState("Home");

  const toggleActive = (icon: string) => {
    setActiveIcon(icon);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showModal]);

  return (
    <>
      {!showModal ? (
        <div className="flex z-10 justify-between px-8 py-6 bg-white/50 fixed w-full">
          <img className="w-[110px]" src="src/assets/icons/Logo.svg" />

          <div className="flex gap-6">
            <div className="hidden md:flex gap-6 items-center">
              <NavLink onClick={() => toggleActive("Home")} to="/">
                <NavBarIcon
                  name="Home"
                  fill=""
                  stroke={activeIcon === "Home" ? "#ff7463" : "Black"}
                />
              </NavLink>
              <NavLink onClick={() => toggleActive("Search")} to="/myRecipes">
                <NavBarIcon
                  name="Search"
                  fill={activeIcon === "Search" ? "#ff7463" : "Black"}
                  stroke=""
                />
              </NavLink>
              <NavLink onClick={() => toggleActive("Add")} to="/createRecipe">
                <NavBarIcon
                  name="Add"
                  fill=""
                  stroke={activeIcon === "Add" ? "#ff7463" : "Black"}
                />
              </NavLink>
              <NavLink onClick={() => toggleActive("List")} to="/grocery">
                <NavBarIcon
                  name="List"
                  fill={activeIcon === "List" ? "#ff7463" : "Black"}
                  stroke=""
                />
              </NavLink>
            </div>

            <img
              onClick={() => setShowModal(!showModal)}
              className="hover:cursor-pointer w-7"
              src="src/assets/icons/Burger.svg"
            />
          </div>
        </div>
      ) : (
        <BurgerModal hidemodal={() => setShowModal(!showModal)} />
      )}
    </>
  );
}
