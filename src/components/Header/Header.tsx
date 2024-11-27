import { BurgerModal } from "../BurgerModal/BurgerModal";
import { useState, useEffect } from "react";
export function Header() {
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    if(showModal){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }   
  },[showModal])
  console.log(showModal);
  return (
    <>
      {!showModal ? (
        <div className="flex justify-between px-8 py-6 bg-white/50 fixed w-full  ">
          <img className="w-[110px]" src="src/assets/icons/Logo.svg" />
          <img
            onClick={() => setShowModal(!showModal)}
            className=""
            src="src/assets/icons/Burger.svg"
          ></img>
        </div>
      ) : (
        <>
          <div className="flex justify-between px-8 py-6 fixed">
            <img className="w-[110px]" src="src/assets/icons/Logo.svg" />
            <img
              onClick={() => setShowModal(!showModal)}
              className=""
              src="src/assets/icons/Burger.svg"
            ></img>
          </div>
          <BurgerModal hidemodal = {()=> setShowModal(!showModal)}/>
        </>
      )}
    </>
  );
}
