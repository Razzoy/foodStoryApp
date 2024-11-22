import { BurgerModal } from "../BurgerModal/BurgerModal";
import { useState } from "react";
export function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      {!showModal ? (
        <div className="flex justify-between p-8">
          <img className="w-[110px]" src="src/assets/icons/Logo.svg" />
          <img
            onClick={() => setShowModal(!showModal)}
            className=""
            src="src/assets/icons/Burger.svg"
          ></img>
        </div>
      ) : (
        <>
          <BurgerModal />
          <div className="flex justify-between p-8">
            <img className="w-[110px]" src="src/assets/icons/Logo.svg" />
            <img
              onClick={() => setShowModal(!showModal)}
              className=""
              src="src/assets/icons/Burger.svg"
            ></img>
          </div>
        </>
      )}
    </>
  );
}
