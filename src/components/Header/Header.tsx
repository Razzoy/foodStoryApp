import { BurgerModal } from "../BurgerModal/BurgerModal";
import { useState, useEffect } from "react";
export function Header() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showModal]);
  console.log(showModal);
  return (
    <>
      <div className="flex justify-between px-8 py-3 bg-white sticky top-0 w-full z-50">
        <img className="w-[90px]" src="/src/assets/icons/Logo.svg" />
        <img
          onClick={() => setShowModal(!showModal)}
          className=""
          src="/src/assets/icons/Burger.svg"
        ></img>
      </div>
      {showModal && <BurgerModal hidemodal={() => setShowModal(!showModal)} />}
    </>
  );
}
