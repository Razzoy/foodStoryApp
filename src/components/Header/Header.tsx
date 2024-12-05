import { BurgerModal } from "../BurgerModal/BurgerModal";
import { NavLink } from "react-router-dom";
import { NavBarIcon } from "../NavBar/NavBarIcon/NavBarIcon";
import { useState, useEffect } from "react";
import logo from "../../assets/icons/Logo.svg"
import burger from "../../assets/icons/Burger.svg"

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
        <div className="flex z-50 justify-between px-4 py-4 bg-gradient-to-br from-white to-transparent backdrop-blur-sm sticky top-0 w-full">
          <NavLink to={"/"}>
            <img className="w-[90px]" src={logo} />
          </NavLink>

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
              src={burger}
            />
          </div>
        </div>
      ) : (
        <BurgerModal hidemodal={() => setShowModal(!showModal)} />
      )}
    </>
  );
}
